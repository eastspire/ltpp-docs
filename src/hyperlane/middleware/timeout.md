---
title: 超时中间件
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - middleware
  - timeout
order: 2
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持超时中间件，用于处理请求超时的情况。

### 超时中间件

```rust
async fn timeout_middleware(ctx: Context) {
    spawn(async move {
        timeout(Duration::from_millis(100), async move {
            ctx.aborted().await;
            ctx.send_response(200, "timeout").await.unwrap();
        })
        .await
        .unwrap();
    });
}

async fn index(ctx: Context) {
    sleep(Duration::from_secs(1)).await;
    ctx.set_response_status_code(200)
        .await
        .set_response_body("Hello, world!")
        .await;
}

async fn response_middleware(ctx: Context) {
    ctx.send().await.unwrap();
}

#[tokio::main]
async fn main() {
    Server::new()
        .request_middleware(timeout_middleware)
        .await
        .response_middleware(response_middleware)
        .await
        .route("/", index)
        .await
        .run()
        .await
        .unwrap();
}
```

<Bottom />
