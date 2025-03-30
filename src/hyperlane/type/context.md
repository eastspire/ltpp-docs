---
title: Context
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - type
  - ctx
order: 11
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的 `Context` 作为中间件和路由处理函数的唯一的参数类型，其内部保存了上下文数据，具体类型定义如下

```rust
pub type RwLockWriteInnerContext<'a> = RwLockWriteGuard<'a, InnerContext>;
pub type RwLockReadInnerContext<'a> = RwLockReadGuard<'a, InnerContext>;
pub type HashMapArcAnySendSync = HashMap<String, ArcAnySendSync>;

#[derive(Clone, Lombok, Default)]
pub struct InnerContext {
    stream: OptionArcRwLockStream,
    request: Request,
    response: Response,
    log: Log,
    data: HashMapArcAnySendSync,
}

#[derive(Clone, Default)]
pub struct Context(pub(super) ArcRwLock<InnerContext>);
```

<Bottom />
