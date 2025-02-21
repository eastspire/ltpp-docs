---
title: stream
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 3
---

## 获取 `stream`

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_clone().await;
// 手动解析
let stream_lock: ArcRwLockStream = controller_data.get_stream().clone().unwrap();
// 使用库封装的函数
let stream_lock: ArcRwLockStream = get_stream(&arc_lock_controller_data).await.unwrap();
// 读锁
{
    let stream = stream_lock.get_read_lock().await;
}
// 写锁
{
    let stream = stream_lock.get_write_lock().await;
}
```

## 获取客户端地址

### 框架封装 get_socket_addr

```rust
// 省略 server 和 路由处理函数 创建
arc_lock_controller_data.get_socket_addr().await;
```

### 手动解析

```rust
// 省略 server 和 路由处理函数 创建
let controller_data: ControllerData = arc_lock_controller_data.get_clone().await;
let socket_addr: String = stream_lock
    .get_read_lock()
    .await
    .peer_addr()
    .and_then(|host| Ok(host.to_string()))
    .unwrap_or("Unknown".to_owned());
```

## 发送 HTTP 完整响应

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_clone().await;
let stream = controller_data.get_mut_stream().clone().unwrap();
let mut response = controller_data.get_response().clone();
let _ = response.set_body("\nhello").send(&stream);
```

## 发送响应体

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_clone().await;
let stream = controller_data.get_mut_stream().clone().unwrap();
let mut response = controller_data.get_response().clone();
let _ = response.set_body("\nhello").send_body(&stream);
```

## 支持多次响应

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_clone().await;
let stream = controller_data.get_mut_stream().clone().unwrap();
let mut response = controller_data.get_response().clone();
let mut i = 0;
loop {
    if i > 10 {
        break;
    }
    i += 1;
    let _ = response.set_body("\nhello").send_body(&stream).await;
}
```

<Bottom />
