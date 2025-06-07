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
> `hyperlane` 框架接收请求和发送响应均依赖 `stream`，类型是 [`ArcRwLockStream`](../type/stream.md) 需要注意框架提供的 `stream` 仅可读，使用方式如下：

### 获取 `stream`

```rust
let stream_lock: ArcRwLockStream = ctx.get_stream().await.clone().unwrap();
```

### 获取客户端地址

> [!tip]
>
> 完整接口参阅[官方文档](./addr.md)，此处只介绍通过 `stream` 解析使用。

```rust
let socket_addr: String = ctx
    .get_stream()
    .await
    .unwrap()
    .read()
    .await
    .peer_addr()
    .and_then(|host| Ok(host.to_string()))
    .unwrap_or("Unknown".to_owned());
```

### 关闭连接

> [!tip]
> 此方法会关闭连接，并终止生命周期，当前请求之后的生命周期代码不会执行。

```rust
ctx.closed().await;
```

<Bottom />
