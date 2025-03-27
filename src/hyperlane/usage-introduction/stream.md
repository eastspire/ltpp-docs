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
let ctx: RwLockWriteContext = ctx.get_write_lock().await;
let stream_lock: Arc<TcpStream> = ctx.get_stream().clone().unwrap();
```

### 获取可变 `stream`

#### 推荐

```rust
let mut  = ctx.get().await;
inner_ctx.get_mut_stream().and_then(|mut stream| {});
```

#### 通过写锁

```rust
let mut ctx: RwLockWriteContext = ctx.get_write_lock().await;
ctx.get_mut_stream().and_then(|mut stream| {});
```

### 设置 `stream`

```rust
let inner_ctx: InnerContext = ctx.get().await;
inner_ctx.set_stream(None);
```

```rust
let mut ctx: RwLockWriteContext = ctx.get_write_lock().await;
ctx.set_stream(None);
```

### 获取客户端地址

> [!tip]
>
> 完整接口参阅[官方文档](./addr.md)，此处只介绍通过 `stream` 解析使用

```rust
let socket_addr: String = ctx
    .get_read_lock()
    .await
    .peer_addr()
    .and_then(|host| Ok(host.to_string()))
    .unwrap_or("Unknown".to_owned());
```

<Bottom />
