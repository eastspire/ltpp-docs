---
title: 响应处理
index: true
icon: book
category:
  - tcplane
  - web
  - rust
order: 6
---

> [!tip]
> controller_data 接口参考 [controller-data 文档](./controller-data.md)

## 响应处理

```rust
// 省略 server 创建
server.func(|arc_lock_controller_data| {
    // code
});
```

## 发送响应

```rust
// 省略 server 创建
server.func(|arc_lock_controller_data| {
    let mut controller_data = arc_lock_controller_data.write().unwrap();
    let stream: ArcTcpStream = controller_data.get_stream().clone().unwrap();
    let response: &mut Response = controller_data.get_mut_response();
    let _ = response.set_data("hello").send(&stream);
});
```

<Bottom />
