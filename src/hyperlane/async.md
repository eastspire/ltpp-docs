---
title: 异步运行时
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 25
---

> [!tip]
> hyperlane 框架在 `v3.0.0` 之前不对异步做任何处理，如果需要异步操作，可以引入第三方库
> hyperlane 框架在 `v3.0.0` 之后内置异步机制
> 具体逻辑如下：
>
> - 先处理所有的异步中间件
> - 再处理所有的异步中间件，异步中间件执行能保证和代码注册顺序一致
> - 再执行同步路由，如果同步路由存在则不会执行同名的异步路由
> - 最后执行异步路由

> [!tip]
> hyperlane 框架在 `v4.0.0` 之前支持同步和异步中间件/路由共存。
> hyperlane 框架在 `v4.0.0` 之后为了性能移除了同步中间件和路由，All in async，在开启 `keep-alive` 情况下带来了效果 QPS 10w+的提升
> 具体逻辑如下：
>
> - 先处理所有的异步中间件
> - 最后执行异步路由

## 框架本身异步使用

```rust
server
    .router("/", move |arc_lock_controller_data| async move {
        let controller_data_arc = arc_lock_controller_data.write().await;;
        println!("hello");
    })
    .await;
```

## 下面是使用 `tokio` 库的异步运行时示例代码

### v4.0.0 之后版本的示例代码

```rust
use hyperlane::*;
use runtime::Runtime;

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
    server.router("/", move |arc_lock_controller_data| {
        let rt = Runtime::new().unwrap();
        // 使用 block_on 启动异步代码
        rt.block_on(async move {
            let async_task = async move {
                let handle: task::JoinHandle<()> = tokio::spawn(async {
                    let result: i32 = some_async_task().await;
                    println!("Result of the async task: {}", result);
                });
                // 模拟异步任务
                handle.await.unwrap();
            };
            // 使用 tokio::spawn 启动一个新的异步任务
            tokio::spawn(async_task).await.unwrap();
        });
    });
    server.listen();
}
```

## 异步闭包捕获外部变量

### 使用 async move

```rust
let test_string: String = "test".to_owned();
server
    .router("/test/async", move |_| {
        let tmp_test_string = test_string.clone();
        async move {
            println!("{:?}", tmp_test_string);
        }
    })
    .await;
```

### 使用 async_func!

```rust
let test_string: String = "test".to_owned();
let func = async_func!(test_string, |_| {
    println!("async_move => {:?}", test_string);
});
server.router("/test/async", func).await;
```

<Bottom />
