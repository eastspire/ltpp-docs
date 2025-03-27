---
title: 客户端地址
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - usage-introduction
  - file-extension
order: 5
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架封装了获取客户端地址的方法

### 使用

#### 获取 `SocketAddr`

```rust
ctx.get_socket_addr().await;
```

#### 获取 `SocketAddr` 如果失败使用默认值

```rust
ctx.get_socket_addr_or_default().await;
```

#### 获取 `SocketAddr` 字符串

```rust
ctx.get_socket_addr_string().await;
```

#### 获取 `SocketAddr` 字符串，如果失败使用默认值

```rust
ctx.get_socket_addr_or_default_string().await;
```

#### 获取 `SocketHost`

```rust
ctx.get_socket_host().await;
```

#### 获取 `SocketPort`

```rust
ctx.get_socket_port().await;
```

<Bottom />
