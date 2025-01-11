---
title: 响应处理
index: true
icon: book
category:
  - tcplane
  - web
  - rust
---

> [!tip]
> controller_data 接口参考 [controller-data 文档](./controller-data.md)

## 响应处理

```rust
// 省略 server 创建
server.func(|controller_data| {
    // code
});
```

## 发送响应

```rust
// 省略 server 创建
server.func(|controller_data| {
    let stream: ControllerDataStream = controller_data.get_stream().clone().unwrap();
    let response: &mut Response = controller_data.get_mut_response();
    let _ = response.set_data("hello".into()).send(&stream);
});
```

<Bottom />
