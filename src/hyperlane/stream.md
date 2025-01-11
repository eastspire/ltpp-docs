---
title: stream
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
---

## 获取 `stream`

```rust
let stream: ControllerDataStream = controller_data.get_stream().clone().unwrap();
```

## 获取客户端地址

```rust
// 省略 server 和 路由处理函数 创建
let host: String = stream
    .peer_addr()
    .and_then(|host| Ok(host.to_string()))
    .unwrap_or("Unknown".to_owned());
```

## 发送 HTTP 完整响应

```rust
let stream = controller_data.get_mut_stream().clone().unwrap();
let mut response = controller_data.get_response().clone();
let _ = response.set_body("\nhello".into()).send(&stream);
```

## 发送响应体

```rust
let stream = controller_data.get_mut_stream().clone().unwrap();
let mut response = controller_data.get_response().clone();
let _ = response.set_body("\nhello".into()).send_body(&stream);
```

## 支持多次响应

```rust
let stream = controller_data.get_mut_stream().clone().unwrap();
let mut response = controller_data.get_response().clone();
let mut i = 0;
loop {
    if i > 10 {
        break;
    }
    i += 1;
    let _ = response.set_body("\nhello".into()).send_body(&stream);
}
```

<Bottom />
