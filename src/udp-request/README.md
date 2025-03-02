---
title: UDP请求库
index: true
icon: book
category:
  - udp-request
  - request
  - rust
dir:
  order: 40
---

<Share colorful />

[GITHUB 地址](https://github.com/ltpp-universe/udp-request)

<center>

[![](https://img.shields.io/crates/v/udp-request.svg)](https://crates.io/crates/udp-request)
[![](https://img.shields.io/crates/d/udp-request.svg)](https://img.shields.io/crates/d/udp-request.svg)
[![](https://docs.rs/udp-request/badge.svg)](https://docs.rs/udp-request)
[![](https://github.com/ltpp-universe/udp-request/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/udp-request/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/udp-request.svg)](./LICENSE)

</center>

[API 文档](https://docs.rs/udp-request/latest/tcp_request/)

> 一个轻量级且高效的 Rust 库，用于构建具有请求-响应处理功能的 UDP 服务器

## 安装

要使用此 crate，可以运行以下命令：

```shell
cargo add udp
```

## 使用示例

```rust
use udp::*;

async fn test_func(arc_lock_controller_data: ArcRwLockControllerData) {
    let res: ResponseData = arc_lock_controller_data.send("tcplane").await.unwrap();
    arc_lock_controller_data
        .get_controller_data()
        .await
        .get_log()
        .debug(
            format!("Response => {:?}\n", String::from_utf8_lossy(&res)),
            log_debug_format_handler,
        );
}

async fn run_server() {
    let mut server: Server = Server::new();
    server.host("0.0.0.0").await;
    server.port(60000).await;
    server.log_dir("./logs").await;
    server.log_size(100_024_000).await;
    server.buffer(100_024_000).await;
    server.log_interval_millis(360).await;
    server.func(test_func).await;
    let test_string: String = "test".to_owned();
    server
        .func(async_func!(test_string, |data| {
            println_success!(&test_string);
            println_success!(&format!("{:?}", data));
        }))
        .await;
    server.listen().await;
}
```

## 许可证

本项目基于 MIT 许可证授权。详情请查看 [LICENSE](LICENSE) 文件。

## 贡献指南

欢迎贡献代码！请提交 Issue 或 Pull Request。

## 联系方式

如有任何疑问，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。
