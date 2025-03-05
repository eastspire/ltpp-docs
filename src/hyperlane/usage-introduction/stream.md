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
let controller_data: RwLockWriteControllerData = controller_data.get_write_lock().await;
let stream_lock: Arc<TcpStream> = controller_data.get_stream().clone().unwrap();
```

### 获取可变 `stream`

#### 推荐

```rust
let mut  = controller_data.get().await;
inner_controller_data.get_mut_stream().and_then(|mut stream| {});
```

#### 通过写锁

```rust
let mut controller_data: RwLockWriteControllerData = controller_data.get_write_lock().await;
controller_data.get_mut_stream().and_then(|mut stream| {});
```

### 设置 `stream`

```rust
let inner_controller_data: InnerControllerData = controller_data.get().await;
inner_controller_data.set_stream(None);
```

```rust
let mut controller_data: RwLockWriteControllerData = controller_data.get_write_lock().await;
controller_data.set_stream(None);
```

### 获取客户端地址

#### 框架封装 get_socket_addr

```rust
controller_data.get_socket_addr().await;
```

#### 手动解析

```rust
let socket_addr: String = controller_data
    .get_read_lock()
    .await
    .peer_addr()
    .and_then(|host| Ok(host.to_string()))
    .unwrap_or("Unknown".to_owned());
```

<Bottom />
