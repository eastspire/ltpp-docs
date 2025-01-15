---
title: 异步运行时
index: true
icon: book
category:
  - tcplane
  - web
  - rust
order: 21
---

> [!tip]
> tcplane 框架在 `v1.42.0` 之前不对异步做任何处理，如果需要异步操作，可以引入第三方库
> tcplane 框架在 `v1.42.0` 之后内置异步机制，具体逻辑如下：
>
> - 先处理所有的同步中间件
> - 再处理所有的异步中间件，异步中间件执行能保证和代码注册顺序一致
> - 再执行同步响应处理，如果同步路由存在则不会执行同名的异步路由
> - 最后执行异步响应处理

## 框架本身异步使用

```rust
server
    .async_router("/", move |arc_lock_controller_data| async move {
        let controller_data_arc = arc_lock_controller_data.write().unwrap();
        println!("hello");
    })
    .await;
```

## 下面是使用 `tokio` 库的异步运行时示例代码

### 依赖配置

```toml
[dependencies]
tokio = { version = "1.43.0", features = ["full"] }
```

### 示例代码

```rust
use tcplane::*;
use runtime::Runtime;
use tokio::*;

async fn some_async_task() -> i32 {
    println!("Starting the task...");
    // 模拟异步操作
    tokio::time::sleep(std::time::Duration::from_secs(2)).await;
    println!("Task completed!");
    0
}

#[tokio::main]
async fn main() {
    let mut server: Server = Server::new();
    server.host("0.0.0.0");
    server.port(60000);
    server.log_size(1_024_000);
    server.router("/", move |controller_data| {
        let rt = Runtime::new().unwrap();
        // 使用 block_on 启动异步代码
        rt.block_on(async move {
            let controller_data_arc = Arc::new(controller_data.clone());
            let async_task = async move {
                let handle: task::JoinHandle<()> = tokio::spawn(async {
                    let result: i32 = some_async_task().await;
                    println!("Result of the async task: {}", result);
                });
                // 模拟异步任务
                handle.await.unwrap();
                let stream: Arc<TcpStream> = controller_data_arc.get_stream().clone().unwrap();
                let res: ResponseResult = controller_data_arc
                    .get_response()
                    .clone()
                    .set_body("hello world".into())
                    .send(&stream);
                controller_data_arc.get_log().log_debug(
                    format!("Response => {:?}\n", String::from_utf8_lossy(&res.unwrap())),
                    |data| data.clone(),
                );
            };
            // 使用 tokio::spawn 启动一个新的异步任务
            tokio::spawn(async_task).await.unwrap();
        });
    });
    server.listen();
}
```

<Bottom />
