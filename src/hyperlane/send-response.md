---
title: 发送响应
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 11
---

> [!tip]
> 通过 `controller_data` 中 `get_response` 获取的只是响应的初始化实例，里面其实没有东西
> 当用户调用 `send` 方法时才会构建出完整 `http` 响应

## 设置响应体

```rust
// 省略 server 和 路由处理函数 创建
let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data).await;;
let mut response: Response = controller_data.get_response().clone();
response.set_body(vec![]);
```

## 设置响应头

```rust
// 省略 server 和 路由处理函数 创建
let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data).await;;
let mut response: Response = controller_data.get_response().clone();
response.set_header("server", "hyperlane");
```

## 设置状态码

```rust
// 省略 server 和 路由处理函数 创建
let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data).await;;
let mut response: Response = controller_data.get_response().clone();
response.set_status_code(200);
```

## 发送响应

### 原子方法

```rust
// 省略 server 和 路由处理函数 创建
let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data).await;;
let mut response: Response = controller_data.get_response().clone();
let stream_lock: ArcRwLockStream = controller_data.get_stream().clone().unwrap();
let res: ResponseResult = response.send(&stream);
```

### 使用框架封装的 `send_response` 和 `send_response_once` 简化操作

#### send_response

> [!tip]
> 发送响应后 `TCP` 连接保留

```rust
let send_res: ResponseResult = send_response(&arc_lock_controller_data, 200, "hello hyperlane");
```

#### send_response_once

> [!tip]
> 发送响应后 `TCP` 连接立即关闭

```rust
let send_res: ResponseResult = send_response_once(&arc_lock_controller_data, 200, "hello hyperlane");
```

## 综合使用

```rust
// 省略 server 创建
server.router("/", |arc_lock_controller_data| {
    let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data).await;
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
