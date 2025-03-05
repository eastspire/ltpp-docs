---
title: ControllerData类型
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - type
  - controller_data
order: 1
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的 `ControllerData` 作为中间件和路由处理函数的唯一的参数类型，具体类型定义如下

```rust
pub type RwLockWriteControllerData<'a> = RwLockWriteGuard<'a, InnerControllerData>;
pub type RwLockReadControllerData<'a> = RwLockReadGuard<'a, InnerControllerData>;

#[derive(Clone, Debug, Lombok)]
pub struct InnerControllerData {
    pub(super) stream: OptionArcRwLockStream,
    pub(super) request: Request,
    pub(super) response: Response,
    pub(super) log: Log,
}

#[derive(Clone, Debug)]
pub struct ControllerData(pub(super) ArcRwLock<InnerControllerData>);
```

<Bottom />
