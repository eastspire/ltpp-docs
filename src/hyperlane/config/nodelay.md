---
title: Nodelay
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - config
  - nodelay
order: 11
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持配置 `nodelay`，该选项基于 `Tokio` 的 `TcpStream::set_nodelay`，用于控制 `TCP_NODELAY` 选项，以减少 `Nagle` 算法的影响，提高低延迟场景下的数据传输效率

### 启用 `nodelay`

```rust
// 省略 server 创建
server.enable_nodelay().await;
```

```rust
// 省略 server 创建
server.set_nodelay(true).await;
```

### 禁用 `nodelay`

```rust
// 省略 server 创建
server.disable_nodelay().await;
```

```rust
// 省略 server 创建
server.set_nodelay(false).await;
```

<Bottom />
