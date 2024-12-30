---
title: stream
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
dir:
  order: 6
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
