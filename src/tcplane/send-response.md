---
title: 发送响应
index: true
icon: book
category:
  - tcplane
  - web
  - rust
order: 9
---

> [!tip]
> 通过 `controller_data` 中 `get_response` 获取的只是响应的初始化实例，里面其实没有东西
> 当用户调用 `send` 方法时才会构建出完整 `http` 响应

## 设置响应体

```rust
// 省略 server 和 路由处理函数 创建
let mut controller_data = arc_lock_controller_data.write().unwrap();
let mut response: Response = controller_data.get_response().clone();
response..set_data(vec![]);
```

## 发送响应

```rust
// 省略 server 和 路由处理函数 创建
let mut controller_data = arc_lock_controller_data.write().unwrap();
let mut response: Response = controller_data.get_response().clone();
let stream: ControllerDataStream = controller_data.get_stream().clone().unwrap();
let res: ResponseResult = response.send(&stream);
```

## 综合使用

```rust
// 省略 server 创建
let mut controller_data = arc_lock_controller_data.write().unwrap();
server.router("/", |controller_data| {
    let mut response: Response = controller_data.get_response().clone();
    let body: Vec<u8> = "404 Not Found".as_bytes().to_vec();
    let stream: ControllerDataStream = controller_data.get_stream().clone().unwrap();
    let res: ResponseResult = response
        .set_body(body)
        .set_status_code(404)
        .set_header("server", "tcplane")
        .send(&stream);
});
```

<Bottom />
