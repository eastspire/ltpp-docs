---
title: TCP后端框架（tcplane）
index: true
icon: book
category:
  - tcplane
  - web
  - rust
dir:
  order: 30
---

<Share colorful />

[GITHUB 地址](https://github.com/ltpp-universe/tcplane)

<center>

[![](https://img.shields.io/crates/v/tcplane.svg)](https://crates.io/crates/tcplane)
[![](https://img.shields.io/crates/d/tcplane.svg)](https://img.shields.io/crates/d/tcplane.svg)
[![](https://docs.rs/tcplane/badge.svg)](https://docs.rs/tcplane)
[![](https://github.com/ltpp-universe/tcplane/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/tcplane/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/tcplane.svg)](./LICENSE)

</center>

[API 文档](https://docs.rs/tcplane/latest/tcplane/)

> **tcplane** 是一个轻量级且高性能的 Rust TCP 服务器库，旨在简化网络服务开发。它支持 TCP 通信、数据流管理和连接处理，专注于提供高效的底层网络连接和数据传输能力，非常适合构建现代网络服务。

## 安装

可以通过以下命令安装该库：

```shell
cargo add tcplane
```

## 使用示例

```rust
use tcplane::*;

async fn test_func(controller_data: ControllerData) {
    controller_data.send("Tcplane").await.unwrap();
    let response: Response = controller_data.get_response().await;
    let response_data: &ResponseData = response.get_response_data();
    controller_data
        .log_debug(
            format!(
                "Response => {:?}\n",
                String::from_utf8_lossy(&response_data)
            ),
            log_debug_format_handler,
        )
        .await;
}

#[tokio::main]
async fn main() {
    let mut server: Server = Server::new();
    server.host("0.0.0.0").await;
    server.port(60000).await;
    server.log_dir("./logs").await;
    server.log_size(100_024_000).await;
    server.buffer(100_024_000).await;
    server.func(test_func).await;
    let test_string: String = "test".to_owned();
    server
        .func(async_func!(test_string, |data| {
            println_success!(&test_string);
            println_success!(String::from_utf8_lossy(&data.get_request().await));
        }))
        .await;
    server.listen().await;
}
```

## 许可协议

本项目基于 MIT 许可协议进行授权。详情请参阅 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交 Issue 或 Pull Request。

## 联系方式

如有任何问题，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
