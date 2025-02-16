---
title: 响应时间测试
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 1
---

## 响应速度测试结果

> 服务端（本地） 8 线程，客户端（本地）请求 1w 次

| 场景      | http-request 平均耗时 | hyper 平均耗时 |
| --------- | --------------------- | -------------- |
| TCP 失败  | 39us                  | 78us           |
| hyperlane | 100us                 | 150us          |
| 阿帕奇    | 300us                 | 2500us         |

### 服务端

```rust
use hyperlane::*;

async fn run_server() {
    let mut server: Server = Server::new();
    server.host("0.0.0.0");
    server.port(60000);
    server.log_dir("./logs");
    server.log_size(1_024_000);
    server.thread_pool_size(8);
    server
        .async_router("/", |arc_lock_data: ArcRwLockControllerData| async move {
            let mut data: RwLockWriteControllerData = arc_lock_data.write().unwrap();
            let stream: Arc<TcpStream> = data.get_stream().clone().unwrap();
            data.get_mut_response()
                .set_body("hello")
                .send(&stream)
                .unwrap();
        })
        .await;
    server.listen();
}

#[tokio::main]
async fn main() {
    run_server().await;
}
```

### 客户端

```rust
use std::time::{Duration, Instant};
use tokio;

static TIMES: u128 = 10000;
static URL: &str = "http://127.0.0.1:60000/";

#[tokio::main]
async fn hyper() {
    use hyper::client::*;
    use hyper::Uri;
    let mut total_times: u128 = 0;
    let mut err_times: u128 = 0;
    for _i in 0..TIMES {
        let uri: Uri = URL.parse().expect("");
        let client: Client<HttpConnector> = Client::new();
        let start: Instant = Instant::now();
        let response: Result<hyper::Response<hyper::Body>, hyper::Error> = client.get(uri).await;
        if response.is_err() {
            err_times += 1;
        }
        let duration: Duration = start.elapsed();
        total_times += duration.as_micros();
    }
    println!("hyper agv time: {} us", total_times / TIMES);
    println!("hyper error times: {}", err_times);
}

fn http_request() {
    use http_request::*;
    let mut total_times: u128 = 0;
    let mut err_times: u128 = 0;
    for _i in 0..TIMES {
        let start: Instant = Instant::now();
        let mut _request_builder: BoxRequestTrait = RequestBuilder::new()
            .get(URL)
            .unredirect()
            .buffer(100)
            .http1_1_only()
            .undecode()
            .build();
        let response = _request_builder.send();
        if response.is_err() {
            err_times += 1;
        }
        let duration: Duration = start.elapsed();
        total_times += duration.as_micros();
    }
    println!("http-request agv time: {} us", total_times / TIMES);
    println!("http-request error times: {}", err_times);
}

fn main() {
    http_request();
    hyper();
}
```

<Bottom />
