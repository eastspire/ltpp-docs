---
title: 多服务
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - config
  - multi-server
order: 13
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持多服务模式，仅需创建多个 `server` 实例并进行监听即可

### 多服务

> [!tip]
> 启动多个服务，监听多个端口

```rust
let app1 = spawn(async move {
    let server: Server = Server::new();
    server.host("0.0.0.0").await;
    server.port(80).await;
    server
        .route("/", |ctx: Context| async move {
            let _ = ctx.send_response(200, "hello world").await;
        })
        .await;
    let _ = server.listen().await;
});
let app2 = spawn(async move {
    let server: Server = Server::new();
    server.host("0.0.0.0").await;
    server.port(81).await;
    server
        .route("/", |ctx: Context| async move {
            let _ = ctx.send_response(200, "hello world").await;
        })
        .await;
    let _ = server.listen().await;
});
let _ = tokio::join!(app1, app2);
```
