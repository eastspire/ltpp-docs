---
title: 中间件
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
---

## 设置中间件

```rust
// 省略 server 创建
server.middleware(|controller_data| {});
```

## 设置多个中间件

```rust
// 省略 server 创建
server.middleware(|controller_data| {
    // 1
});
server.middleware(|controller_data| {
    // 2
});
server.middleware(|controller_data| {
    // 3
});
server.middleware(|controller_data| {
    // 4
});
```

## 中间件函数参数类型

```rust
pub type ControllerDataStream = Arc<TcpStream>;
pub type ControllerDataStreamOpt = Option<ControllerDataStream>;
pub type ControllerDataRequest = Request;
pub type ControllerDataRequestOpt = Option<ControllerDataRequest>;
pub type ControllerDataResponse = Response;
pub type ControllerDataResponseOpt = Option<ControllerDataResponse>;

#[derive(Debug, Clone, Lombok)]
pub struct Log {
    pub(super) path: String,
    pub(super) file_size: usize,
}

#[derive(Clone, Debug, Lombok)]
pub struct ControllerData {
    pub(super) stream: ControllerDataStreamOpt,
    pub(super) request: ControllerDataRequestOpt,
    pub(super) response: ControllerDataResponseOpt,
    pub(super) log: Log,
}
```
