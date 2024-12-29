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

[GITHUB 地址](https://github.com/ltpp-universe/hyperlane)

[LTPP-GIT 地址](https://git.ltpp.vip/root/hyperlane)

<Share colorful />
<Catalog />

[![](https://img.shields.io/crates/v/hyperlane.svg)](https://crates.io/crates/hyperlane)<br>
[![](https://docs.rs/hyperlane/badge.svg)](https://docs.rs/hyperlane)<br>
[![](https://img.shields.io/crates/l/hyperlane.svg)](./license)<br>
[![](https://github.com/ltpp-universe/hyperlane/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/hyperlane/actions?query=workflow:Rust)

[官方文档](https://docs.ltpp.vip/HYPERLANE/)
[API 文档](https://docs.rs/hyperlane/latest/hyperlane/)

> Hyperlane 是一个轻量级且高性能的 Rust HTTP 服务器库，旨在简化网络服务的开发。它支持 HTTP 请求解析、响应构建、TCP 通信和重定向功能，适合构建现代 Web 服务。

## 安装

要使用此 crate，可以运行以下命令：

```shell
cargo add hyperlane
```

## 使用示例

```rust
use hyperlane::*;
fn println(data: &str) {
    OutputListBuilder::new()
        .add(
            OutputBuilder::new()
                .text(&current_time())
                .blod(true)
                .bg_color(ColorType::Use(Color::Yellow))
                .color(ColorType::Rgb(255, 255, 255))
                .build(),
        )
        .add(
            OutputBuilder::new()
                .text(COLON_SPACE_SYMBOL)
                .blod(true)
                .bg_color(ColorType::Use(Color::Magenta))
                .color(ColorType::Rgb(255, 255, 255))
                .build(),
        )
        .add(
            OutputBuilder::new()
                .text(data)
                .blod(true)
                .bg_color(ColorType::Use(Color::Green))
                .color(ColorType::Rgb(255, 255, 255))
                .endl(true)
                .build(),
        )
        .run();
}
fn common_log(log_data: &String) -> String {
    println(&log_data);
    let write_data: String = format!("{}: {}\n", current_time(), log_data);
    write_data.clone()
}
let mut server: Server = Server::new();
server.host("0.0.0.0");
server.port(80);
server.thread_pool_size(10);
server.log_dir("./logs");
server.log_size(1_024_000);
server.middleware(|controller_data| {
    let request: Request = controller_data.get_request().clone().unwrap();
    controller_data
        .get_log()
        .log_debug(format!("Request => \n{:#?}", request), common_log);
});
server.router("/", |controller_data| {
    controller_data
        .get_log()
        .log_info("visit path /", common_log);
    let mut response: Response = controller_data.get_response().clone().unwrap();
    let body: Vec<u8> = "404 Not Found".as_bytes().to_vec();
    let stream: ControllerDataStream = controller_data.get_stream().clone().unwrap();
    let res: ResponseResult = response
        .set_body(body)
        .set_status_code(404)
        .set_header("server", "hyperlane")
        .send(&stream);
    controller_data.get_log().log_info(
        format!("Response => {:?}", String::from_utf8_lossy(&res.unwrap())),
        common_log,
    );
});
server.router("/hello", |controller_data| {
    controller_data
        .get_log()
        .log_info("visit path /hello", common_log);
    let mut response: Response = controller_data.get_response().clone().unwrap();
    let body: Vec<u8> = "hello world!".as_bytes().to_vec();
    let stream: ControllerDataStream = controller_data.get_stream().clone().unwrap();
    let res: ResponseResult = response
        .set_body(body)
        .set_status_code(200)
        .set_header("server", "hyperlane")
        .send(&stream);
    controller_data.get_log().log_info(
        format!("Response => {:?}", String::from_utf8_lossy(&res.unwrap())),
        common_log,
    );
});
server.router("/panic", |_controller_data| {
    panic!("test panic");
});
server.listen();
```

## 许可证

此项目基于 MIT 许可证授权。详细信息请查看 [license](license) 文件。

## 贡献

欢迎贡献！请提交 issue 或创建 pull request。

## 联系方式

如有任何疑问，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。
