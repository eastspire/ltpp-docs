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
#[derive(Clone, Lombok)]
pub struct Log {
    pub(super) path: String,
    pub(super) file_size: usize,
    pub(super) interval_millis: usize,
    pub(super) log_error_queue: LogListArcLock,
    pub(super) log_info_queue: LogListArcLock,
    pub(super) log_debug_queue: LogListArcLock,
}
```

<Bottom />
