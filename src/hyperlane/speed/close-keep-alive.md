---
title: 关闭keep-alive
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 2
---

## QPS 测试结果

> 1000 并发，一共 100w 请求。QPS 结果如下：
>
> - 1.Hyperlane 框架：47294.55
> - 2.Tokio：39984.12
> - 3.Rocket 框架：31979.27
> - 4.Rust 标准库：31243.92
> - 5.Gin 框架：19514.88
> - 6.Go 标准库：19316.27
> - 7.Apache：18017.33
> - 8.Node 标准库：16605.69

### hyperlane 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            60000

Document Path:          /
Document Length:        25 bytes

Concurrency Level:      1000
Time taken for tests:   21.144 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      144000000 bytes
HTML transferred:       25000000 bytes
Requests per second:    47294.55 [#/sec] (mean)
Time per request:       21.144 [ms] (mean)
Time per request:       0.021 [ms] (mean, across all concurrent requests)
Transfer rate:          6650.80 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   18 171.1      1   15778
Processing:     0    2   3.3      1      40
Waiting:        0    2   3.2      1      37
Total:          0   20 171.4      2   15780

Percentage of the requests served within a certain time (ms)
  50%      2
  66%      3
  75%      3
  80%      4
  90%      5
  95%     11
  98%     23
  99%   1032
 100%  15780 (longest request)
```

```rust
use hyperlane::*;

fn test_sync_middleware(arc_lock_controller_data: ArcRwLockControllerData) {
    let controller_data: RwLockWriteControllerData = arc_lock_controller_data.write().unwrap();
    let mut response: Response = controller_data.get_response().clone();
    let stream: ArcTcpStream = controller_data.get_stream().clone().unwrap();
    response
        .set_body("hello")
        .set_status_code(200)
        .set_header(CONTENT_TYPE, APPLICATION_JSON)
        .set_header(CONTENT_ENCODING, CONTENT_ENCODING_GZIP)
        .send(&stream)
        .unwrap();
}

fn run_server() {
    let mut server: Server = Server::new();
    server.host("0.0.0.0");
    server.port(60000);
    server.log_dir("./logs");
    server.middleware(test_sync_middleware);
    server.listen();
}

#[tokio::main]
async fn main() {
    run_server();
}
```

### Rust 标准库

```sh
Server Hostname:        127.0.0.1
Server Port:            9000

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   32.006 seconds
Complete requests:      1000000
Failed requests:        36
   (Connect: 0, Receive: 12, Length: 12, Exceptions: 12)
Total transferred:      87998944 bytes
HTML transferred:       4999940 bytes
Requests per second:    31243.92 [#/sec] (mean)
Time per request:       32.006 [ms] (mean)
Time per request:       0.032 [ms] (mean, across all concurrent requests)
Transfer rate:          2684.99 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   26 332.6      0   15760
Processing:     0    3   0.9      3      25
Waiting:        0    3   0.9      3      25
Total:          0   29 332.9      4   15764

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      4
  75%      4
  80%      4
  90%      4
  95%      4
  98%      7
  99%   1041
 100%  15764 (longest request)
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
        break;
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
Time taken for tests:   25.010 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      88000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    39984.12 [#/sec] (mean)
Time per request:       25.010 [ms] (mean)
Time per request:       0.025 [ms] (mean, across all concurrent requests)
Transfer rate:          3436.14 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   20 241.9      0   15835
Processing:     0    4   4.4      3      56
Waiting:        0    4   4.3      3      56
Total:          0   24 242.2      3   15849

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      4
  75%      4
  80%      5
  90%      8
  95%     17
  98%     26
  99%   1036
 100%  15849 (longest request)
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
        break;
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
Server Hostname:        127.0.0.1
Server Port:            8000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      1000
Time taken for tests:   31.270 seconds
Complete requests:      1000000
Failed requests:        6
   (Connect: 0, Receive: 2, Length: 2, Exceptions: 2)
Total transferred:      246999506 bytes
HTML transferred:       12999974 bytes
Requests per second:    31979.27 [#/sec] (mean)
Time per request:       31.270 [ms] (mean)
Time per request:       0.031 [ms] (mean, across all concurrent requests)
Transfer rate:          7713.73 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   24 267.2      0   15838
Processing:     0    5   6.0      4     315
Waiting:        0    5   6.0      4     315
Total:          0   29 267.6      4   15843

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      5
  75%      5
  80%      6
  90%     11
  95%     18
  98%     31
  99%   1040
 100%  15843 (longest request)
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
            keep_alive: 0,
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
Time taken for tests:   55.502 seconds
Complete requests:      1000000
Failed requests:        4
   (Connect: 0, Receive: 0, Length: 4, Exceptions: 0)
Total transferred:      11191955232 bytes
HTML transferred:       10917956328 bytes
Requests per second:    18017.33 [#/sec] (mean)
Time per request:       55.502 [ms] (mean)
Time per request:       0.056 [ms] (mean, across all concurrent requests)
Transfer rate:          196923.00 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    6  59.7      2    3164
Processing:     5   26 400.5     17   55489
Waiting:        0   24 386.5     16   55489
Total:          8   31 405.0     20   55493

Percentage of the requests served within a certain time (ms)
  50%     20
  66%     22
  75%     23
  80%     24
  90%     26
  95%     29
  98%     33
  99%     50
 100%  55493 (longest request)
```

### Gin 框架

```sh
Server Hostname:        127.0.0.1
Server Port:            8080

Document Path:          /
Document Length:        5 bytes

Concurrency Level:      1000
Time taken for tests:   51.243 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      140000000 bytes
HTML transferred:       5000000 bytes
Requests per second:    19514.88 [#/sec] (mean)
Time per request:       51.243 [ms] (mean)
Time per request:       0.051 [ms] (mean, across all concurrent requests)
Transfer rate:          2668.05 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   39 554.7      0   32237
Processing:     0    9   3.9      8      51
Waiting:        0    8   3.9      8      49
Total:          0   48 554.9      8   32267

Percentage of the requests served within a certain time (ms)
  50%      8
  66%      8
  75%      8
  80%      8
  90%      9
  95%     21
  98%     43
  99%   1048
 100%  32267 (longest request)
```

```go
package main

import "github.com/gin-gonic/gin"

func main() {
    gin.SetMode(gin.ReleaseMode)
    r := gin.New()
    gin.DisableConsoleColor()
    r.GET("/", func(c *gin.Context) {
        c.Header("Connection", "close")
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
Time taken for tests:   51.770 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      149000000 bytes
HTML transferred:       13000000 bytes
Requests per second:    19316.27 [#/sec] (mean)
Time per request:       51.770 [ms] (mean)
Time per request:       0.052 [ms] (mean, across all concurrent requests)
Transfer rate:          2810.67 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   41 422.2      0   15840
Processing:     0    9   3.7      8      62
Waiting:        0    9   3.6      8      62
Total:          0   50 422.6      8   15849

Percentage of the requests served within a certain time (ms)
  50%      8
  66%      8
  75%      8
  80%      9
  90%      9
  95%     21
  98%   1042
  99%   1049
 100%  15849 (longest request)
```

```go
package main

import (
	"fmt"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Connection", "close")
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
Time taken for tests:   60.220 seconds
Complete requests:      1000000
Failed requests:        0
Total transferred:      114000000 bytes
HTML transferred:       13000000 bytes
Requests per second:    16605.69 [#/sec] (mean)
Time per request:       60.220 [ms] (mean)
Time per request:       0.060 [ms] (mean, across all concurrent requests)
Transfer rate:          1848.68 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   46 457.3      0   32236
Processing:     2   13   1.6     13      41
Waiting:        2   12   1.6     12      41
Total:          3   58 457.7     13   32254

Percentage of the requests served within a certain time (ms)
  50%     13
  66%     13
  75%     14
  80%     14
  90%     14
  95%     15
  98%   1050
  99%   1054
 100%  32254 (longest request)
```

```js
const http = require('http');

const requestHandler = (_req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    Connection: 'close',
  });
  res.end('Hello, World!');
};

const server = http.createServer(requestHandler);

server.keepAliveTimeout = 0;
server.headersTimeout = 65000;

server.listen(8000, '0.0.0.0', () => {
  console.log('Server is running on http://localhost:8000');
});
```

<Bottom />
