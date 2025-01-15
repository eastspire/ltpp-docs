---
title: stream
index: true
icon: book
category:
  - tcplane
  - web
  - rust
order: 8
---

## 获取 `stream`

```rust
let controller_data = arc_lock_controller_data.write().unwrap();
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

<Bottom />
