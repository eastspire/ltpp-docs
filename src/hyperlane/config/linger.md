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
> `hyperlane` 框架支持配置 `linger`

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
