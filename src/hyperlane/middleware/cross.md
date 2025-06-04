---
title: 跨域中间件
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - middleware
  - multi-server
order: 1
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持跨域中间件，用于处理跨域请求的情况。

### 跨域中间件

```rust
use hyperlane::{
    tokio::{
        spawn,
        time::{sleep, timeout},
    },
    *,
};
use std::time::Duration;

pub async fn cross_middleware(ctx: Context) {
    ctx.set_response_header(ACCESS_CONTROL_ALLOW_ORIGIN, ANY)
        .await
        .set_response_header(ACCESS_CONTROL_ALLOW_METHODS, ALL_METHODS)
        .await
        .set_response_header(ACCESS_CONTROL_ALLOW_HEADERS, ANY)
        .await;
}

async fn index(ctx: Context) {
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
        .request_middleware(cross_middleware)
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
