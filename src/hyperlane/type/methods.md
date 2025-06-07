---
title: Method
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - method
  - type
order: 3
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的 `Method` 内部具体类型定义如下

```rust
/// Defines the `Method` enum, representing HTTP request methods.
///
/// The `Method` enum includes commonly used HTTP methods such as `GET` and `POST`.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum Method {
    /// Represents the HTTP `GET` method.
    GET,
    /// Represents the HTTP `POST` method.
    POST,
    /// Represents the HTTP `PUT` method.
    PUT,
    /// Represents the HTTP `DELETE` method.
    DELETE,
    /// Represents the HTTP `PATCH` method.
    PATCH,
    /// Represents the HTTP `HEAD` method.
    HEAD,
    /// Represents the HTTP `OPTIONS` method.
    OPTIONS,
    /// Represents the HTTP `CONNECT` method.
    CONNECT,
    /// Represents the HTTP `TRACE` method.
    TRACE,
    /// Unknown
    UNKNOWN(String),
}
```

<Bottom />
