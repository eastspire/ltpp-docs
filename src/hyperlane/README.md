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

<Share colorful />
<Catalog />

[![](https://img.shields.io/crates/v/hyperlane.svg)](https://crates.io/crates/hyperlane)<br>
[![](https://docs.rs/hyperlane/badge.svg)](https://docs.rs/hyperlane)<br>
[![](https://img.shields.io/crates/l/hyperlane.svg)](./license)<br>
[![](https://github.com/ltpp-universe/hyperlane/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/hyperlane/actions?query=workflow:Rust)

[官方文档](https://docs.ltpp.vip/HYPERLANE/)

[API 文档](https://docs.rs/hyperlane/latest/hyperlane/)

> hyperlane 是一个轻量级且高性能的 Rust HTTP 服务器库，旨在简化网络服务的开发。它支持 HTTP 请求解析、响应构建、TCP 通信和重定向功能，适合构建现代 Web 服务。

## 安装

要使用此 crate，可以运行以下命令：

```shell
cargo add hyperlane
```

## 快速开始

[hyperlane-quick-start](https://github.com/ltpp-universe/hyperlane-quick-start)

```sh
git clone https://github.com/ltpp-universe/hyperlane-quick-start.git
```

## 使用示例

```rust
use hyperlane::*;

fn send_request() -> Vec<u8> {
    let mut header: HashMap<&str, &str> = HashMap::new();
    header.insert(ACCEPT, ACCEPT_ANY);
    header.insert(CONTENT_TYPE, APPLICATION_JSON);
    header.insert(ACCEPT_ENCODING, ACCEPT_ENCODING_GZIP);
    let mut body: HashMap<&str, &str> = HashMap::new();
    body.insert("code", "fn main() {\r\n    println!(\"hello world\");\r\n}");
    body.insert("language", "rust");
    body.insert("testin", "");
    let mut _request_builder = RequestBuilder::new()
        .post("https://code.ltpp.vip/")
        .json(body)
        .headers(header)
        .timeout(10000)
        .redirect()
        .buffer(4096)
        .max_redirect_times(8)
        .http1_1_only()
        .build();
    _request_builder
        .send()
        .and_then(|response| Ok(response.binary().get_body()))
        .unwrap_or_default()
}

fn sync_middleware(arc_lock_controller_data: ArcRwLockControllerData) {
    let mut controller_data: RwLockWriteControllerData =
        get_rw_lock_write_controller_data(&arc_lock_controller_data);
    let response: &mut Response = controller_data.get_mut_response();
    response.set_header("server", "hyperlane");
}

async fn test_async_middleware(arc_lock_controller_data: ArcRwLockControllerData) {
    sync_middleware(arc_lock_controller_data);
}

fn sync_root_router(arc_lock_controller_data: ArcRwLockControllerData) {
    let send_res: ResponseResult =
        send_response(&arc_lock_controller_data, 200, "hello hyperlane => /index");
    let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data);
    controller_data.get_log().info(
        format!("Response result => {:?}", send_res),
        log_debug_format_handler,
    );
}

fn sync_request_router(arc_lock_controller_data: ArcRwLockControllerData) {
    let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data);
    let mut response: Response = controller_data.get_response().clone();
    let body: Vec<u8> = send_request();
    let stream: ArcTcpStream = controller_data.get_stream().clone().unwrap();
    let res: ResponseResult = response
        .set_body(body)
        .set_status_code(200)
        .set_header("server", "hyperlane")
        .set_header(CONTENT_TYPE, APPLICATION_JSON)
        .send(&stream);
    controller_data
        .get_log()
        .info(format!("Response result => {:?}", res), log_handler);
}

fn sync_hello_router(arc_lock_controller_data: ArcRwLockControllerData) {
    let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data);
    controller_data
        .get_log()
        .info("visit path /hello", log_handler);
    let mut response: Response = controller_data.get_response().clone();
    let body: &str = "hello world!";
    let stream: ArcTcpStream = controller_data.get_stream().clone().unwrap();
    let res: ResponseResult = response
        .set_body(body.into())
        .set_status_code(200)
        .set_header("server", "hyperlane")
        .send(&stream);
    controller_data
        .get_log()
        .info(format!("Response result => {:?}", res), log_handler);
}

fn sync_panic_route(_controller_data: ArcRwLock<ControllerData>) {
    panic!("test panic");
}

async fn async_test_router(arc_lock_controller_data: ArcRwLockControllerData) {
    let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data);
    controller_data.get_log().info("visit path /", log_handler);
    let mut response: Response = controller_data.get_response().clone();
    let body: &str = "Async";
    let stream: ArcTcpStream = controller_data.get_stream().clone().unwrap();
    let res: ResponseResult = response
        .set_body(body.into())
        .set_status_code(200)
        .set_header("server", "hyperlane")
        .send(&stream);
    controller_data
        .get_log()
        .info(format!("Response result => {:?}", res), log_handler);
}

async fn run_server() {
    let mut server: Server = Server::new();
    server.host("0.0.0.0");
    server.port(60000);
    server.log_dir("./logs");
    server.log_size(100_024_000);
    server.log_interval_millis(1000);
    server.middleware(sync_middleware);
    server.async_middleware(test_async_middleware).await;
    server.router("/", sync_root_router);
    server.router("/request", sync_request_router);
    server.router("/hello", sync_hello_router);
    server.router("/panic", sync_panic_route);
    server.async_router("/async/test", async_test_router).await;
    let test_string: String = "test".to_owned();
    server
        .async_router(
            "/test/async_func",
            async_func!(test_string, |data| {
                println_success!(test_string);
                println_success!(format!("{:?}", data));
            }),
        )
        .await;
    server.listen();
}
```

## 许可证

此项目基于 MIT 许可证授权。详细信息请查看 [license](license) 文件。

## 贡献

欢迎贡献！请提交 issue 或创建 pull request。

## 联系方式

如有任何疑问，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
