---
title: linger
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - config
  - linger
order: 12
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持配置 `linger`，该选项基于 `Tokio` 的 `TcpStream::set_linger`，用于控制 `SO_LINGER` 选项，以决定连接关闭时未发送数据的处理方式，从而影响连接终止时的行为

### 启用 `linger`

```rust
// 省略 server 创建
server.enable_linger(Duration::from_millis(10)).await;
```

```rust
// 省略 server 创建
server.set_linger(Some(Duration::from_millis(10))).await;
```

### 禁用 `linger`

```rust
// 省略 server 创建
server.disable_linger().await;
```

```rust
// 省略 server 创建
server.set_linger(None).await;
```

<Bottom />
