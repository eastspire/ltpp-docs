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
order: 5
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的 `Log` 内部具体类型定义如下

```rust
#[derive(Debug, Clone, Lombok)]
pub struct Log {
    pub(super) path: String,
    pub(super) file_size: usize,
    pub(super) interval_millis: usize,
}
```

<Bottom />
