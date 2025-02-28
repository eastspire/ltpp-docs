---
title: ControllerData类型
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 1
---

> [!tip]
> ControllerData 作为中间件和路由处理函数的唯一的被 `RwLock` 锁修饰的参数类型，内部具体类型定义如下

```rust
#[derive(Clone, Debug, Lombok)]
pub struct ControllerData {
    pub(super) stream: OptionArcRwLockStream,
    pub(super) request: Request,
    pub(super) response: Response,
    pub(super) log: Log,
}
```

<Bottom />
