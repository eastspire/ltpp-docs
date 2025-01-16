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

> hyperlane 是一个轻量级且高性能的 Rust HTTP 服务器库，旨在简化网络服务的开发。它支持 HTTP 请求解析、响应构建、TCP 通信和重定向功能，适合构建现代 Web 服务。

## 安装

要使用此 crate，可以运行以下命令：

```shell
cargo add hyperlane
```

## 使用示例

```rust
use hyperlane::*;

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

fn test_sync_middleware(arc_lock_controller_data: ArcRwLockControllerData) {
    let mut controller_data: RwLockWriteControllerData =
        arc_lock_controller_data.write().unwrap();
    let request: Request = controller_data.get_request().clone();
    let stream: ArcTcpStream = controller_data.get_stream().clone().unwrap();
    let host: String = stream
        .peer_addr()
        .and_then(|host| Ok(host.to_string()))
        .unwrap_or("Unknown".to_owned());
    controller_data.get_log().debug(
        format!("Request host => {}\n{:#?}", host, request),
        common_log,
    );
    controller_data
        .get_mut_request()
        .set_header("middleware", "crate");
}

async fn test_async_middleware(arc_lock_controller_data: ArcRwLockControllerData) {
    let mut controller_data: RwLockWriteControllerData =
        arc_lock_controller_data.write().unwrap();
    let request: Request = controller_data.get_request().clone();
    let stream: ArcTcpStream = controller_data.get_stream().clone().unwrap();
    let host: String = stream
        .peer_addr()
        .and_then(|host| Ok(host.to_string()))
        .unwrap_or("Unknown".to_owned());
    controller_data.get_log().debug(
        format!("Request host => {}\n{:#?}", host, request),
        common_log,
    );
    controller_data
        .get_mut_request()
        .set_header("middleware", "crate");
}

fn sync_root_router(arc_lock_controller_data: ArcRwLockControllerData) {
    let controller_data: RwLockWriteControllerData = arc_lock_controller_data.write().unwrap();
    controller_data
        .get_log()
        .info("visit path /", common_log);
    let mut response: Response = controller_data.get_response().clone();
    let body: Vec<u8> = "404 Not Found".as_bytes().to_vec();
    let stream: ArcTcpStream = controller_data.get_stream().clone().unwrap();
    let res: ResponseResult = response
        .set_body(body)
        .set_status_code(404)
        .set_header("server", "hyperlane")
        .send(&stream);
    controller_data.get_log().info(
        format!("Response => {:?}", String::from_utf8_lossy(&res.unwrap())),
        common_log,
    );
}

fn sync_request_router(arc_lock_controller_data: ArcRwLockControllerData) {
    let controller_data: RwLockWriteControllerData = arc_lock_controller_data.write().unwrap();
    controller_data
        .get_log()
        .info("visit path /request", common_log);
    let mut response: Response = controller_data.get_response().clone();
    let body: Vec<u8> = send_request();
    let stream: ArcTcpStream = controller_data.get_stream().clone().unwrap();
    let res: ResponseResult = response
        .set_body(body)
        .set_status_code(200)
        .set_header("server", "hyperlane")
        .set_header(CONTENT_TYPE, APPLICATION_JSON)
        .send(&stream);
    controller_data.get_log().info(
        format!("Response => {:?}", String::from_utf8_lossy(&res.unwrap())),
        common_log,
    );
}

fn sync_hello_router(arc_lock_controller_data: ArcRwLockControllerData) {
    let controller_data: RwLockWriteControllerData = arc_lock_controller_data.write().unwrap();
    controller_data
        .get_log()
        .info("visit path /hello", common_log);
    let mut response: Response = controller_data.get_response().clone();
    let body: Vec<u8> = "hello world!".as_bytes().to_vec();
    let stream: ArcTcpStream = controller_data.get_stream().clone().unwrap();
    let res: ResponseResult = response
        .set_body(body)
        .set_status_code(200)
        .set_header("server", "hyperlane")
        .send(&stream);
    controller_data.get_log().info(
        format!("Response => {:?}", String::from_utf8_lossy(&res.unwrap())),
        common_log,
    );
}

fn sync_panic_route(_controller_data: ArcRwLock<ControllerData>) {
    panic!("test panic");
}

async fn async_test_async_router(arc_lock_controller_data: ArcRwLockControllerData) {
    let controller_data: RwLockWriteControllerData = arc_lock_controller_data.write().unwrap();
    controller_data
        .get_log()
        .info("visit path /", common_log);
    let mut response: Response = controller_data.get_response().clone();
    let body: Vec<u8> = "Async".as_bytes().to_vec();
    let stream: ArcTcpStream = controller_data.get_stream().clone().unwrap();
    let res: ResponseResult = response
        .set_body(body)
        .set_status_code(200)
        .set_header("server", "hyperlane")
        .send(&stream);
    controller_data.get_log().info(
        format!("Response => {:?}", String::from_utf8_lossy(&res.unwrap())),
        common_log,
    );
}

async fn run_server() {
    let mut server: Server = Server::new();
    server.host("0.0.0.0");
    server.port(60000);
    server.thread_pool_size(1);
    server.log_dir("./logs");
    server.log_size(1_024_000);
    server.middleware(test_sync_middleware);
    server.async_middleware(test_async_middleware).await;
    server.router("/", sync_root_router);
    server.router("/request", sync_request_router);
    server.router("/hello", sync_hello_router);
    server.router("/panic", sync_panic_route);
    server
        .async_router("/test/async", async_test_async_router)
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
