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

[GITHUB 地址](https://github.com/ltpp-universe/tcplane)

[LTPP-GIT 地址](https://git.ltpp.vip/root/tcplane)

<Share colorful />
<Catalog />

## tcplane

[![](https://img.shields.io/crates/v/tcplane.svg)](https://crates.io/crates/tcplane)<br>
[![](https://docs.rs/tcplane/badge.svg)](https://docs.rs/tcplane)<br>
[![](https://img.shields.io/crates/l/tcplane.svg)](./LICENSE)<br>
[![](https://github.com/ltpp-universe/tcplane/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/tcplane/actions?query=workflow:Rust)

[官方文档](https://docs.ltpp.vip/tcplane/)

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

fn println(data: &str) {
    let binding: String = current_time();
    let mut time_output_builder: OutputBuilder<'_> = OutputBuilder::new();
    let mut text_output_builder: OutputBuilder<'_> = OutputBuilder::new();
    let time_output: Output<'_> = time_output_builder
        .text(&binding)
        .blod(true)
        .bg_color(ColorType::Use(Color::Yellow))
        .color(ColorType::Rgb(255, 255, 255))
        .build();
    let text_output: Output<'_> = text_output_builder
        .text(data)
        .blod(true)
        .bg_color(ColorType::Use(Color::Green))
        .color(ColorType::Rgb(255, 255, 255))
        .endl(true)
        .build();
    OutputListBuilder::new()
        .add(time_output)
        .add(text_output)
        .run();
}

fn common_log(log_data: &String) -> String {
    println(&log_data);
    let write_data: String = format!("{}: {}\n", current_time(), log_data);
    write_data.clone()
}

fn run_server() {
    let mut server: Server = Server::new();
    server.host("0.0.0.0");
    server.port(60000);
    server.thread_pool_size(10);
    server.log_dir("./logs");
    server.log_size(1_024_000);
    server.buffer(1_024_000);
    server.middleware(|controller_data| {
        {
            let request: &mut Vec<u8> = controller_data.get_mut_request();
            let mut new_request: Vec<u8> = request.clone();
            let ext: Vec<u8> = "test".as_bytes().to_vec();
            new_request.extend(ext);
            *request = new_request;
        }
        let request: Request = controller_data.get_request().clone();
        let stream: ArcTcpStream = controller_data.get_stream().clone().unwrap();
        let host: String = stream
            .peer_addr()
            .and_then(|host| Ok(host.to_string()))
            .unwrap_or("Unknown".to_owned());

        controller_data.get_log().log_debug(
            format!(
                "Request host => {}\n{:#?}\n",
                host,
                String::from_utf8_lossy(&request),
            ),
            common_log,
        );
    });

    server.func(|controller_data| {
        let stream: ArcTcpStream = controller_data.get_stream().clone().unwrap();
        let res: ResponseResult = controller_data
            .get_response()
            .clone()
            .data("hello world")
            .send(&stream);
        controller_data.get_log().log_debug(
            format!("Response => {:?}\n", String::from_utf8_lossy(&res.unwrap())),
            common_log,
        );
    });
    server.listen();
}

fn main() {
    run_server();
}
```

## 许可协议

本项目基于 MIT 许可协议进行授权。详情请参阅 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交 Issue 或 Pull Request。

## 联系方式

如有任何问题，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。
