---
title: 流
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - usage-introduction
  - stream
order: 3
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架接收请求和发送响应均依赖 `stream`，使用方式如下

### 获取 `stream`

```rust
let stream_lock: ArcRwLockStream = ctx.get_stream().await.clone().unwrap();
```

### 获取客户端地址

> [!tip]
>
> 完整接口参阅[官方文档](./addr.md)，此处只介绍通过 `stream` 解析使用

```rust
let socket_addr: String = ctx
    .get_stream()
    .await
    .unwrap()
    .get_read_lock()
    .await
    .peer_addr()
    .and_then(|host| Ok(host.to_string()))
    .unwrap_or("Unknown".to_owned());
```

<Bottom />
