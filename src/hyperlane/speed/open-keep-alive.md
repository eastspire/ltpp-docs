---
title: 开启keep-alive
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 3
---

> [!tip]
> hyperlane 暂时不对 keep-alive 提供支持，可能被恶意攻击后对服务器性能影响较大

## QPS 测试结果

> 1000 并发，一共 100w 请求。QPS 结果如下：
>
> - 1.Tokio：49932.79
> - 2.Hyperlane 框架：45569.14（关闭 keep-alive）
> - 3.Rocket 框架：43373.54
> - 4.Rust 标准库：40615.65
> - 5.Go 标准库：23476.99
> - 6.Gin 框架：22663.06
> - 7.Node 标准库：19746.54
> - 8.Apache：18042.94

### hyperlane 框架

**关闭 keep-alive 测试结果**

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        25 bytes

Concurrency Level:      1000
Time taken for tests:   21.945 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      144000000 bytes
HTML transferred:       25000000 bytes
Requests per second:    45569.14 [#/sec] (mean)
Time per request:       21.945 [ms] (mean)
Time per request:       0.022 [ms] (mean, across all concurrent requests)
Transfer rate:          6408.16 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   18 204.0      1   15422
Processing:     0    3   4.5      2     140
Waiting:        0    2   4.4      1     139
Total:          0   20 204.3      2   15423

Percentage of the requests served within a certain time (ms)
  50%      2
  66%      3
  75%      4
  80%      4
  90%      6
  95%     13
  98%     25
  99%   1022
 100%  15423 (longest request)
```

```rust
use hyperlane::*;

fn test_sync_middleware(arc_lock_controller_data: ArcRwLockControllerData) {
    let controller_data: RwLockWriteControllerData = arc_lock_controller_data.write().unwrap();
    let mut response: Response = controller_data.get_response().clone();
    let stream: ArcTcpStream = controller_data.get_stream().clone().unwrap();
    response
        .set_body("hello".into())
        .set_status_code(200)
        .set_header(CONTENT_TYPE, APPLICATION_JSON)
        .set_header(CONTENT_ENCODING, CONTENT_ENCODING_GZIP)
        .send(&stream)
        .unwrap();
}

async fn run_server() {
    let mut server: Server = Server::new();
    server.host("0.0.0.0");
    server.port(60000);
    server.log_dir("./logs");
    server.middleware(test_sync_middleware);
    server.listen();
}

#[tokio::main]
async fn main() {
    run_server().await;
}
```

### Rust 标准库

```sh
Server Hostname:        127.0.0.1
Server Port:            9000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   24.621 seconds
Complete requests:      1000000
Failed requests:        309
   (Connect: 0, Receive: 103, Length: 103, Exceptions: 103)
Total transferred:      87990936 bytes
HTML transferred:       4999485 bytes
Requests per second:    40615.65 [#/sec] (mean)
Time per request:       24.621 [ms] (mean)
Time per request:       0.025 [ms] (mean, across all concurrent requests)
Transfer rate:          3490.05 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   20 225.1      0   15675
Processing:     0    2   1.2      2      20
Waiting:        0    2   1.2      2      20
Total:          0   22 225.6      2   15677

Percentage of the requests served within a certain time (ms)
  50%      2
  66%      3
  75%      3
  80%      3
  90%      5
  95%      7
  98%      9
  99%   1038
 100%  15677 (longest request)
```

```rust
use std::io::{self, Read, Write};
use std::net::{TcpListener, TcpStream};

static RESPONSE: &[u8] = &[
    72, 84, 84, 80, 47, 49, 46, 49, 32, 50, 48, 48, 32, 79, 75, 13, 10, 67, 111, 110, 116, 101,
    110, 116, 45, 84, 121, 112, 101, 58, 32, 116, 101, 120, 116, 47, 112, 108, 97, 105, 110, 13,
    10, 67, 111, 110, 116, 101, 110, 116, 45, 76, 101, 110, 103, 116, 104, 58, 32, 53, 13, 10, 67,
    111, 110, 110, 101, 99, 116, 105, 111, 110, 58, 32, 99, 108, 111, 115, 101, 13, 10, 13, 10,
    104, 101, 108, 108, 111,
];

fn handle_client(mut stream: TcpStream) {
    let mut buffer: [u8; 512] = [0; 512];
    let mut request: Vec<u8> = Vec::new();
    loop {
        let n = match stream.read(&mut buffer) {
            Ok(0) => {
                break;
            }
            Ok(n) => n,
            Err(e) => {
                eprintln!("Error reading from stream: {}", e);
                break;
            }
        };
        request.extend_from_slice(&buffer[..n]);
        if let Some(pos) = find_http_end(&request) {
            if let Err(e) = stream.write_all(RESPONSE) {
                eprintln!("Error writing response to stream: {}", e);
                break;
            }
            request.drain(..pos + 4);
        }
        if request.is_empty() {
            break;
        }
    }
}

fn find_http_end(request: &[u8]) -> Option<usize> {
    for i in 0..request.len() - 3 {
        if &request[i..i + 4] == b"\r\n\r\n" {
            return Some(i);
        }
    }
    None
}

fn main() -> io::Result<()> {
    let listener: TcpListener = TcpListener::bind("0.0.0.0:9000")?;
    println!("Server is listening on port 9000");
    for stream in listener.incoming() {
        match stream {
            Ok(stream) => {
                handle_client(stream);
            }
            Err(e) => {
                eprintln!("Failed to accept connection: {}", e);
            }
        }
    }
    Ok(())
}
```

### Tokio 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            10000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   20.027 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      88000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    49932.79 [#/sec] (mean)
Time per request:       20.027 [ms] (mean)
Time per request:       0.020 [ms] (mean, across all concurrent requests)
Transfer rate:          4291.10 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   16 176.9      1    7203
Processing:     0    3   3.6      2      46
Waiting:        0    3   3.5      2      46
Total:          0   19 177.2      3    7218

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      3
  75%      4
  80%      4
  90%      5
  95%     12
  98%     24
  99%   1026
 100%   7218 (longest request)
```

```rust
use tokio::io::{self, AsyncReadExt, AsyncWriteExt};
use tokio::net::{TcpListener, TcpStream};

static RESPONSE: &[u8] = &[
    72, 84, 84, 80, 47, 49, 46, 49, 32, 50, 48, 48, 32, 79, 75, 13, 10, 67, 111, 110, 116, 101,
    110, 116, 45, 84, 121, 112, 101, 58, 32, 116, 101, 120, 116, 47, 112, 108, 97, 105, 110, 13,
    10, 67, 111, 110, 116, 101, 110, 116, 45, 76, 101, 110, 103, 116, 104, 58, 32, 53, 13, 10, 67,
    111, 110, 110, 101, 99, 116, 105, 111, 110, 58, 32, 99, 108, 111, 115, 101, 13, 10, 13, 10,
    104, 101, 108, 108, 111,
];

async fn handle_client(mut stream: TcpStream) {
    let mut buffer: [u8; 512] = [0; 512];
    let mut request: Vec<u8> = Vec::new();
    loop {
        let n: usize = match stream.read(&mut buffer).await {
            Ok(0) => {
                break;
            }
            Ok(n) => n,
            Err(e) => {
                eprintln!("Error reading from stream: {}", e);
                break;
            }
        };
        request.extend_from_slice(&buffer[..n]);
        if let Some(pos) = find_http_end(&request) {
            if let Err(e) = stream.write_all(RESPONSE).await {
                eprintln!("Error writing response to stream: {}", e);
                break;
            }
            request.drain(..pos + 4);
        }
        if request.is_empty() {
            break;
        }
    }
}

fn find_http_end(request: &[u8]) -> Option<usize> {
    for i in 0..request.len() - 3 {
        if &request[i..i + 4] == b"\r\n\r\n" {
            return Some(i);
        }
    }
    None
}

#[tokio::main]
async fn main() -> io::Result<()> {
    let listener: TcpListener = TcpListener::bind("0.0.0.0:10000").await?;
    println!("Server is listening on port 10000");
    loop {
        match listener.accept().await {
            Ok((stream, _)) => {
                tokio::spawn(async move {
                    handle_client(stream).await;
                });
            }
            Err(e) => {
                eprintln!("Failed to accept connection: {}", e);
            }
        }
    }
}
```

### Rocket 框架

```sh
Server Software:        Rocket
Server Hostname:        127.0.0.1
Server Port:            8000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   29.557 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      247000000 bytes
HTML transferred:       13000000 bytes
Requests per second:    33833.25 [#/sec] (mean)
Time per request:       29.557 [ms] (mean)
Time per request:       0.030 [ms] (mean, across all concurrent requests)
Transfer rate:          8160.95 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   22 277.3      0   15672
Processing:     0    5   4.6      4      57
Waiting:        0    5   4.6      4      57
Total:          0   27 277.7      4   15682

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      4
  75%      5
  80%      6
  90%     10
  95%     17
  98%     27
  99%   1037
 100%  15682 (longest request)
```

```rust
#[macro_use]
extern crate rocket;

static RESPONSE: [u8; 13] = [72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33];

#[get("/")]
async fn index() -> &'static [u8] {
    &RESPONSE
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index])
        .configure(rocket::Config {
            log_level: rocket::config::LogLevel::Off,
            port: 8000,
            keep_alive: 10000,
            ..Default::default()
        })
}
```

### Apache

```sh
Server Hostname:        127.0.0.1
Server Port:            80

Document Path:          /
Document Length:        10918 bytes

Concurrency Level:      1000
Time taken for tests:   55.423 seconds
Complete requests:      1000000
Failed requests:        8
   (Connect: 0, Receive: 0, Length: 8, Exceptions: 0)
Total transferred:      11191910464 bytes
HTML transferred:       10917912656 bytes
Requests per second:    18042.94 [#/sec] (mean)
Time per request:       55.423 [ms] (mean)
Time per request:       0.055 [ms] (mean, across all concurrent requests)
Transfer rate:          197202.16 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    5  57.2      2    3171
Processing:     6   24 421.0     17   55411
Waiting:        0   23 394.1     16   55411
Total:          9   30 425.0     19   55417

Percentage of the requests served within a certain time (ms)
  50%     19
  66%     21
  75%     21
  80%     22
  90%     24
  95%     25
  98%     28
  99%     32
 100%  55417 (longest request)
```

### Gin 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            8080

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   44.125 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      121000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    22663.06 [#/sec] (mean)
Time per request:       44.125 [ms] (mean)
Time per request:       0.044 [ms] (mean, across all concurrent requests)
Transfer rate:          2677.96 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   36 404.6      0   32244
Processing:     0    7   3.1      7      48
Waiting:        0    7   3.1      7      48
Total:          0   43 404.9      7   32254

Percentage of the requests served within a certain time (ms)
  50%      7
  66%      7
  75%      8
  80%      8
  90%      8
  95%     12
  98%     45
  99%   1047
 100%  32254 (longest request)
```

```go
package main

import "github.com/gin-gonic/gin"

func main() {
    gin.SetMode(gin.ReleaseMode)
    r := gin.New()
    gin.DisableConsoleColor()
    r.GET("/", func(c *gin.Context) {
        c.String(200, "Hello")
    })
    r.Run(":8080")
}
```

## Go 标准库

```sh
Server Hostname:        127.0.0.1
Server Port:            8080

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   42.595 seconds
Complete requests:      1000000
Failed requests:        3
   (Connect: 0, Receive: 1, Length: 1, Exceptions: 1)
Total transferred:      130000000 bytes
HTML transferred:       13000000 bytes
Requests per second:    23476.99 [#/sec] (mean)
Time per request:       42.595 [ms] (mean)
Time per request:       0.043 [ms] (mean, across all concurrent requests)
Transfer rate:          2980.48 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   34 312.9      0   15839
Processing:     0    7   2.9      7      48
Waiting:        0    7   2.9      7      48
Total:          0   41 313.4      7   15846

Percentage of the requests served within a certain time (ms)
  50%      7
  66%      7
  75%      7
  80%      8
  90%      8
  95%     11
  98%   1039
  99%   1048
 100%  15846 (longest request)
```

```go
package main

import (
	"fmt"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, World!")
}

func main() {
	http.HandleFunc("/", helloHandler)
	fmt.Println("Starting server at :8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Println("Error starting server:", err)
	}
}
```

## Node 标准库

```sh
Server Hostname:        127.0.0.1
Server Port:            8000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   50.642 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      114000000 bytes
HTML transferred:       13000000 bytes
Requests per second:    19746.54 [#/sec] (mean)
Time per request:       50.642 [ms] (mean)
Time per request:       0.051 [ms] (mean, across all concurrent requests)
Transfer rate:          2198.35 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   38 400.5      0   32236
Processing:     2   11   1.7     11      45
Waiting:        1   10   1.7     10      44
Total:          3   49 401.0     11   32249

Percentage of the requests served within a certain time (ms)
  50%     11
  66%     11
  75%     11
  80%     11
  90%     12
  95%     13
  98%   1043
  99%   1052
 100%  32249 (longest request)
```

```js
const http = require('http');

const requestHandler = (_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
};
const server = http.createServer(requestHandler);
server.keepAliveTimeout = 60000;
server.headersTimeout = 65000;
server.listen(8000, '0.0.0.0', () => {
  console.log('Server is running on http://localhost:8000');
});
```
