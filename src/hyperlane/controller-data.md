---
title: ControllerData类型
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
---

> [!tip]
> ControllerData 作为中间件和路由处理函数的参数类型，具体类型定义如下

```rust
pub type ControllerDataStream = Arc<TcpStream>;
pub type ControllerDataStreamOpt = Option<ControllerDataStream>;
pub type ControllerDataRequest = Request;
pub type ControllerDataResponse = Response;

#[derive(Clone, Debug, Lombok)]
pub struct ControllerData {
    pub(super) stream: ControllerDataStreamOpt,
    pub(super) request: ControllerDataRequest,
    pub(super) response: ControllerDataResponse,
    pub(super) log: Log,
}
```
