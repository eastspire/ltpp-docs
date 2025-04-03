---
title: nodelay
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
> `hyperlane` 框架支持配置 `nodelay`

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
