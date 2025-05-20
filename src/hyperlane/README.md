---
title: Web后端框架
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
dir:
  order: 26
---

<Share colorful />

[GITHUB 地址](https://github.com/eastspire/hyperlane)

<center>

<img src="./img/logo.png" alt="" height="160">

[![](https://img.shields.io/crates/v/hyperlane.svg)](https://crates.io/crates/hyperlane)
[![](https://img.shields.io/crates/d/hyperlane.svg)](https://img.shields.io/crates/d/hyperlane.svg)
[![](https://docs.rs/hyperlane/badge.svg)](https://docs.rs/hyperlane)
[![](https://github.com/eastspire/hyperlane/workflows/Rust/badge.svg)](https://github.com/eastspire/hyperlane/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/hyperlane.svg)](./license)

</center>

[API 文档](https://docs.rs/hyperlane/latest/hyperlane/)

> Hyperlane 是一个轻量级且高性能的 Rust HTTP 服务器库，旨在简化网络服务开发。它支持 HTTP 请求解析、响应构建和 TCP 通信，非常适合构建现代 Web 服务。此外，它还支持请求和响应中间件、WebSocket 和 Server-Sent Events (SSE)，从而实现灵活高效的实时通信。Hyperlane 使用纯 Rust 和标准库构建，提供跨 Windows、Linux 和 macOS 的真正跨平台兼容性，且所有平台上的 API 体验一致，依托 Tokio 的异步运行时实现无缝网络通信，无需特定于平台的依赖。

## 安装

要使用此 crate，可以运行以下命令：

```shell
cargo add hyperlane
```

## 快速开始

- [hyperlane-quick-start git](https://github.com/eastspire/hyperlane-quick-start)
- [hyperlane-quick-start docs](https://docs.ltpp.vip/hyperlane/quick-start/)

```sh
git clone https://github.com/eastspire/hyperlane-quick-start.git
```

## 使用示例

```rust
use hyperlane::*;

async fn request_middleware(ctx: Context) {
    let socket_addr: String = ctx.get_socket_addr_or_default_string().await;
    ctx.set_response_header(SERVER, HYPERLANE)
        .await
        .set_response_header(CONNECTION, CONNECTION_KEEP_ALIVE)
        .await
        .set_response_header(CONTENT_TYPE, content_type_charset(TEXT_PLAIN, UTF8))
        .await
        .set_response_header(DATE, gmt())
        .await
        .set_response_header("SocketAddr", socket_addr)
        .await;
}

async fn response_middleware(ctx: Context) {
    let _ = ctx.send().await;
    let request: String = ctx.get_request_string().await;
    let response: String = ctx.get_response_string().await;
    ctx.log_info(&request, log_handler)
        .await
        .log_info(&response, log_handler)
        .await;
}

async fn root_route(ctx: Context) {
    ctx.set_response_status_code(200)
        .await
        .set_response_body("Hello hyperlane => /")
        .await;
}

async fn websocket_route(ctx: Context) {
    let request_body: Vec<u8> = ctx.get_request_body().await;
    let _ = ctx.send_response_body(request_body).await;
}

#[tokio::main]
async fn main() {
    let server: Server = Server::new();
    server.host("0.0.0.0").await;
    server.port(60000).await;
    server.enable_nodelay().await;
    server.log_dir("./logs").await;
    server.enable_inner_log().await;
    server.enable_inner_print().await;
    server.log_size(100_024_000).await;
    server.http_line_buffer_size(4096).await;
    server.websocket_buffer_size(4096).await;
    server.request_middleware(request_middleware).await;
    server.response_middleware(response_middleware).await;
    server.route("/", root_route).await;
    server.route("/websocket", websocket_route).await;
    let test_string: String = "Hello hyperlane".to_owned();
    server
        .route(
            "/test/:text",
            future_fn!(test_string, |ctx: Context| {
                let param: RouteParams = ctx.get_route_params().await;
                println_success!(format!("{:?}", param));
                println_success!(test_string);
                panic!("Test panic");
            }),
        )
        .await;
    server.run().await.unwrap();
}
```

## 许可证

此项目基于 MIT 许可证授权。详细信息请查看 [license](license) 文件。

## 贡献

欢迎贡献！请提交 issue 或创建 pull request。

## 联系方式

如有任何疑问，请联系作者：[root@ltpp.vip](mailto:root@ltpp.vip)。

<Bottom />
