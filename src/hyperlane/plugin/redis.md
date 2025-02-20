---
title: Redis
index: true
icon: book
category:
  - clone
  - web
  - rust
order: 1
---

[GITHUB 地址](https://github.com/ltpp-universe/hyperlane-quick-start/tree/redis)

### 封装插件

> [!tip]
> 在 `plugin` 目录新建 `redis` 目录，`config`目录新建`redis`目录并设置 `redis` 连接信息，主要代码如下

```rust
pub static REDIS_CONNECT: Lazy<ArcRwLock<Option<Connection>>> =
    Lazy::new(|| Arc::new(RwLock::new(None)));

pub async fn init() -> RedisResult<()> {
    let url: String = format!(
        "redis://{}:{}@{}:{}",
        crate::config::redis::USERNAME,
        crate::config::redis::PASSWORD,
        crate::config::redis::HOST,
        crate::config::redis::PORT
    );
    let client: Client = Client::open(url)?;
    let connect: Connection = client.get_connection()?;
    let mut redis_connect: RwLockWriteGuard<'_, Option<Connection>> =
        REDIS_CONNECT.write().unwrap();
    *redis_connect = Some(connect);
    Ok(())
}

pub fn get_connection_rw_lock() -> RwLockWriteGuard<'static, Option<Connection>> {
    REDIS_CONNECT.write().unwrap()
}

pub fn set_value(key: &str, value: &str) -> RedisResult<()> {
    let mut redis_connect_opt: RwLockWriteGuard<'_, Option<Connection>> = get_connection_rw_lock();
    if let Some(ref mut redis_connect) = *redis_connect_opt {
        let _: () = redis_connect.set(key, value)?;
    }
    Ok(())
}

pub fn get_value(key: &str) -> RedisResult<String> {
    let mut redis_connect_opt: RwLockWriteGuard<'_, Option<Connection>> = get_connection_rw_lock();
    if let Some(ref mut redis_connect) = *redis_connect_opt {
        let value: String = redis_connect.get(key)?;
        return Ok(value);
    }
    Ok(String::new())
}
```

### 业务代码使用

> [!tip]
> （省略路由配置）以下代码功能：记录和展示访问次数

```rust
pub async fn redis(arc_lock_controller_data: ArcRwLockControllerData) {
    let last_value_string: String = get_value("count").unwrap_or_default();
    let last_value: usize = last_value_string.parse::<usize>().unwrap_or_default();
    let now_value: usize = last_value + 1;
    let set_value_res: Result<(), redis::RedisError> =
        set_value("count", &format!("{}", now_value));
    match set_value_res {
        Ok(_) => println_success!("now value => ", now_value),
        Err(err) => println_danger!("set_value error: ", err),
    }
    let send_res: ResponseResult = send_response(
        &arc_lock_controller_data,
        200,
        format!("hello hyperlane => /redis {} times", last_value),
    ).await;
    let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data).await;
    controller_data.get_log().info(
        format!("Response result => {:?}", send_res),
        log_debug_format_handler,
    );
}
```
