---
title: HttpVersion
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - http-version
  - type
order: 2
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的 `UpgradeType` 内部具体类型定义如下

```rust
/// Represents the HTTP version used in the request or response.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum HttpVersion {
    /// HTTP version 0.9
    HTTP0_9,
    /// HTTP version 1.0
    HTTP1_0,
    /// HTTP version 1.1
    HTTP1_1,
    /// HTTP version 2.0
    HTTP2,
    /// HTTP version 3.0
    HTTP3,
    /// Unknown version
    Unknown(String),
}
```

<Bottom />
