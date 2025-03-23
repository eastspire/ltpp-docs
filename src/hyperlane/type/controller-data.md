---
title: ControllerData
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - type
  - controller_data
order: 11
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的 `ControllerData` 作为中间件和路由处理函数的唯一的参数类型，具体类型定义如下

```rust
pub type RwLockWriteInnerControllerData<'a> = RwLockWriteGuard<'a, InnerControllerData>;
pub type RwLockReadInnerControllerData<'a> = RwLockReadGuard<'a, InnerControllerData>;

#[derive(Clone, Debug, Lombok, Default)]
pub struct InnerControllerData {
    stream: OptionArcRwLockStream,
    request: Request,
    response: Response,
    log: Log,
}

#[derive(Clone, Debug, Default)]
pub struct ControllerData(pub(super) ArcRwLock<InnerControllerData>);
```

<Bottom />
