---
title: Web后端框架（hyperlane）
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

[GITHUB 地址](https://github.com/ltpp-universe/hyperlane)

<center>

<img src="./img/logo.png" alt="" height="160">

[![](https://img.shields.io/crates/v/hyperlane.svg)](https://crates.io/crates/hyperlane)
[![](https://img.shields.io/crates/d/hyperlane.svg)](https://img.shields.io/crates/d/hyperlane.svg)
[![](https://docs.rs/hyperlane/badge.svg)](https://docs.rs/hyperlane)
[![](https://github.com/ltpp-universe/hyperlane/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/hyperlane/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/hyperlane.svg)](./license)

</center>

[API 文档](https://docs.rs/hyperlane/latest/hyperlane/)

> hyperlane 是一个轻量级且高性能的 Rust HTTP 服务器库，旨在简化网络服务的开发。它支持 HTTP 请求解析、响应构建、TCP 通信和重定向功能，适合构建现代 Web 服务。

## 安装

要使用此 crate，可以运行以下命令：

```shell
cargo add hyperlane
```

## 快速开始

- [hyperlane-quick-start git](https://github.com/ltpp-universe/hyperlane-quick-start)
- [hyperlane-quick-start docs](https://docs.ltpp.vip/hyperlane/quick-start/)

```sh
git clone https://github.com/ltpp-universe/hyperlane-quick-start.git
```

## 使用示例

```rust
use hyperlane::*;

async fn request_middleware(controller_data: ControllerData) {
    let socket_addr: String = controller_data
        .get_socket_addr()
        .await
        .unwrap_or(DEFAULT_SOCKET_ADDR)
        .to_string();
    controller_data
        .set_response_header(SERVER, "hyperlane")
        .await
        .set_response_header(CONNECTION, CONNECTION_KEEP_ALIVE)
        .await
        .set_response_header("SocketAddr", socket_addr)
        .await;
}

async fn response_middleware(controller_data: ControllerData) {
    let request: String = controller_data.get_request().await.to_string();
    let response: String = controller_data.get_response().await.to_string();
    controller_data
        .log_info(format!("Request => {}", request), log_handler)
        .await
        .log_info(format!("Response => {}", response), log_handler)
        .await;
}

async fn root_router(controller_data: ControllerData) {
    let _ = controller_data
        .send_response(200, "hello hyperlane => /")
        .await;
}

async fn run_server() {
    let mut server: Server = Server::new();
    server.host("0.0.0.0").await;
    server.port(60000).await;
    server.log_dir("./logs").await;
    server.log_size(100_024_000).await;
    server.log_interval_millis(1000).await;
    server.request_middleware(request_middleware).await;
    server.router("/", root_router).await;
    server.response_middleware(response_middleware).await;
    let test_string: String = "test".to_owned();
    server
        .router(
            "/test/panic",
            async_func!(test_string, |data| {
                println_success!(test_string);
                println_success!(format!("{:?}", data));
                panic!("test panic");
            }),
        )
        .await;
    server.listen().await;
}
```

## 许可证

此项目基于 MIT 许可证授权。详细信息请查看 [license](license) 文件。

## 贡献

欢迎贡献！请提交 issue 或创建 pull request。

## 联系方式

如有任何疑问，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
