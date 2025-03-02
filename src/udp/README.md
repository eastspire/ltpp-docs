---
title: UDP后端框架
index: true
icon: book
category:
  - udp
  - web
  - rust
dir:
  order: 39
---

<Share colorful />

[GITHUB 地址](https://github.com/ltpp-universe/udp)

<center>

[![](https://img.shields.io/crates/v/udp.svg)](https://crates.io/crates/udp)
[![](https://img.shields.io/crates/d/udp.svg)](https://img.shields.io/crates/d/udp.svg)
[![](https://docs.rs/udp/badge.svg)](https://docs.rs/udp)
[![](https://github.com/ltpp-universe/udp/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/udp/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/udp.svg)](./LICENSE)

</center>

[API 文档](https://docs.rs/udp/latest/udp/)

> 一个轻量高效的 Rust 库，用于构建支持请求-响应处理的 UDP 服务器

## 安装

要使用此 crate，你可以运行以下命令：

```shell
cargo add udp
```

## 使用方法

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

## 许可协议

本项目基于 MIT 许可协议进行授权。详情请参阅 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交 Issue 或 Pull Request。

## 联系方式

如有任何问题，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
