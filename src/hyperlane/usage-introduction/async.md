---
title: 异步运行时
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - usage-introduction
  - async
order: 2
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架在 `v3.0.0` 之前不对异步做任何处理，如果需要异步操作，可以引入第三方库
>
> `hyperlane` 框架在 `v3.0.0` 之后内置异步机制

> [!tip]
>
> `hyperlane` 框架在 `v4.0.0` 之前支持同步和异步中间件/路由共存。
> `hyperlane` 框架在 `v4.0.0` 之后为了性能移除了同步中间件和路由（ `all in async` ），在开启 `keep-alive` 情况下带来了效果 `QPS 10w+`的提升

### 框架本身异步使用

```rust
server.route("/", move |_| async move {
    println!("hello");
}).await;
```

### 下面是使用 `tokio` 库的异步运行时示例代码

#### v4.0.0 之后版本的示例代码

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
    server.route("/", move |controller_data| {
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

### 异步闭包捕获外部变量

#### 使用 async move

```rust
let test_string: String = "test".to_owned();
server.route("/test/async", move |_| {
    let tmp_test_string = test_string.clone();
    async move {
        println!("{:?}", tmp_test_string);
    }
}).await;
```

#### 使用 async_func!

```rust
let test_string: String = "test".to_owned();
let func = async_func!(test_string, |_| {
    println!("async_move => {:?}", test_string);
});
server.route("/test/async", func).await;
```

<Bottom />
