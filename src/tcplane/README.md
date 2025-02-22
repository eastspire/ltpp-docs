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

## tcplane

<center>

[![](https://img.shields.io/crates/v/tcplane.svg)](https://crates.io/crates/tcplane)
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

async fn test_middleware(arc_lock_controller_data: ArcRwLockControllerData) {
    let mut controller_data: RwLockWriteControllerData =
        arc_lock_controller_data.get_write_lock().await;
    {
        let request: &mut Request = controller_data.get_mut_request();
        let mut new_request: Request = request.clone();
        let ext: Request = "hello world".as_bytes().to_vec();
        new_request.extend(ext);
        *request = new_request;
    }
    let request: Request = controller_data.get_request().clone();
    let host: String = arc_lock_controller_data.get_socket_addr().await.unwrap();
    controller_data.get_log().debug(
        format!(
            "Request host => {}\n{:#?}\n",
            host,
            String::from_utf8_lossy(&request),
        ),
        log_debug_format_handler,
    );
}

async fn test_func(arc_lock_controller_data: ArcRwLockControllerData) {
    let res: ResponseData = arc_lock_controller_data.send("tcplane").await.unwrap();
    arc_lock_controller_data.get_clone().await.get_log().debug(
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
    server.middleware(test_middleware).await;
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
```
