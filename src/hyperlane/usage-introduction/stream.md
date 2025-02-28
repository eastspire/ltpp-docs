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

### 获取 `stream`

```rust
let controller_data: RwLockWriteControllerData = arc_lock_controller_data.get_write_lock().await;
let stream_lock: Arc<TcpStream> = controller_data.get_stream().clone().unwrap();
```

### 获取可变 `stream`

#### 推荐

```rust
let mut controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
controller_data.get_mut_stream().and_then(|mut stream| {});
```

#### 通过写锁

```rust
let mut controller_data: RwLockWriteControllerData = arc_lock_controller_data.get_write_lock().await;
controller_data.get_mut_stream().and_then(|mut stream| {});
```

### 设置 `stream`

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
controller_data.set_stream(None);
```

```rust
let mut controller_data: RwLockWriteControllerData = arc_lock_controller_data.get_write_lock().await;
controller_data.set_stream(None);
```

### 获取客户端地址

#### 框架封装 get_socket_addr

```rust
arc_lock_controller_data.get_socket_addr().await;
```

#### 手动解析

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
let socket_addr: String = stream_lock
    .get_read_lock()
    .await
    .peer_addr()
    .and_then(|host| Ok(host.to_string()))
    .unwrap_or("Unknown".to_owned());
```

<Bottom />
