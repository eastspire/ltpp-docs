---
title: Log
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - log
  - type
order: 12
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的 `Log` （使用参考 [官方文档](../../hyperlane-log/README.md)）内部具体类型定义如下

```rust
pub type ListLog = Vec<(String, ArcLogFunc)>;
pub type LogListArcLock = Arc<RwLock<ListLog>>;
pub type LogArcLock = Arc<RwLock<Log>>;
pub type LogFunc = dyn LogFuncTrait;
pub type ArcLogFunc = Arc<LogFunc>;
pub type ArcLog = Arc<Log>;

#[derive(Clone, Lombok)]
pub struct Log {
    pub(super) path: String,
    pub(super) limit_file_size: usize,
}
```

<Bottom />
