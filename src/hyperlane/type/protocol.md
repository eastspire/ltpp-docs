---
title: Protocol
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - protocol
  - type
order: 1
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的 `Protocol` 内部具体类型定义如下

```rust
/// Defines the `Protocol` enum, representing HTTP-related protocols.
///
/// The `Protocol` enum includes:
/// - `HTTP`: Represents the HTTP protocol.
/// - `HTTPS`: Represents the HTTPS protocol.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum Protocol {
    /// Represents the HTTP protocol.
    HTTP,
    /// Represents the HTTPS protocol.
    HTTPS,
    /// Unknown
    Unknown(String),
}
```

<Bottom />
