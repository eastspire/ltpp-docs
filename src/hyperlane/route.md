---
title: 路由
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
---

## 注册路由

> [!tip]
> 使用 `router` 接口进行路由注册，第一个参数是路由名称，第二个参数是路由处理函数

```rust
// 省略 server 创建
server.router("路由名称", |controller_data| {});
```

## 路由处理函数参数类型

```rust
pub type ControllerDataStream = Arc<TcpStream>;
pub type ControllerDataStreamOpt = Option<ControllerDataStream>;
pub type ControllerDataRequest = Request;
pub type ControllerDataRequestOpt = Option<ControllerDataRequest>;
pub type ControllerDataResponse = Response;
pub type ControllerDataResponseOpt = Option<ControllerDataResponse>;

#[derive(Debug, Clone, Lombok)]
pub struct Log {
    pub(super) path: &'static str,
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
