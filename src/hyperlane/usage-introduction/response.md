---
title: 响应
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 5
---

> [!tip]
> 通过 `controller_data` 中 `get_response` 获取的只是响应的初始化实例，里面其实没有东西
> 当用户调用 `send` 方法时才会构建出完整 `http` 响应

### 获取响应

#### 推荐

```rust
let controller_data = arc_lock_controller_data.get_write_lock().await;
let response: Response = controller_data.get_response().clone();
```

#### 通过写锁

```rust
let controller_data = arc_lock_controller_data.get_write_lock().await;
let response: Response = controller_data.get_response().clone();
```

### 获取可变响应

#### 推荐

```rust
let mut controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
let response: &mut Response = controller_data.get_mut_response();
```

#### 通过写锁

```rust
let mut controller_data = arc_lock_controller_data.get_write_lock().await;
let response: &mut Response = controller_data.get_mut_response();
```

### 设置响应

#### 设置响应体

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
let mut response: Response = controller_data.get_response().clone();
response.set_body(vec![]);
```

#### 设置响应头

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
let mut response: Response = controller_data.get_response().clone();
response.set_header("server", "hyperlane");
```

#### 设置状态码

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
let mut response: Response = controller_data.get_response().clone();
response.set_status_code(200);
```

## 发送响应

### 原子方法

#### 发送 HTTP 完整响应

```rust
let mut controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
let stream = controller_data.get_mut_stream().clone().unwrap();
let mut response = controller_data.get_response().clone();
let _ = response.set_body("\nhello").send(&stream);
```

#### 发送响应体

```rust
let mut controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
let stream = controller_data.get_mut_stream().clone().unwrap();
let mut response = controller_data.get_response().clone();
let _ = response.set_body("\nhello").send_body(&stream);
```

### 使用框架封装的 `send_response` 和 `send_response_once` 简化操作

#### send_response

> [!tip]
> 发送响应后 `TCP` 连接保留
>
> - 第一个参数: 状态码
> - 第二个参数: 内容

```rust
let send_res: ResponseResult = arc_lock_controller_data.send_response(200, "hello hyperlane");
```

#### send_response_once

> [!tip]
> 发送响应后 `TCP` 连接立即关闭
>
> - 第一个参数: 状态码
> - 第二个参数: 内容

```rust
let send_res: ResponseResult = arc_lock_controller_data.send_response_once(200, "hello hyperlane");
```

### 综合使用

```rust
// 省略 server 创建
server.router("/", |arc_lock_controller_data| {
    let controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
    let mut response: Response = controller_data.get_response().clone();
    let body: Vec<u8> = "404 Not Found".as_bytes().to_vec();
    let stream_lock: ArcRwLockStream = controller_data.get_stream().clone().unwrap();
    let res: ResponseResult = response
        .set_body(body)
        .set_status_code(404)
        .set_header("server", "hyperlane")
        .send(&stream);
});
```

<Bottom />
