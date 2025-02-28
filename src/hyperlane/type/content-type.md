---
title: Content-type类型
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - type
  - content-type
order: 8
---

<Share colorful />

> [!tip]
>
> `Content-type` 内部具体类型定义如下

```rust
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum ContentType {
    /// Represents the `application/json` content type.
    ApplicationJson,

    /// Represents the `application/xml` content type.
    ApplicationXml,

    /// Represents the `text/plain` content type.
    TextPlain,

    /// Represents the `text/html` content type.
    TextHtml,

    /// Represents the `application/x-www-form-urlencoded` content type.
    FormUrlEncoded,

    /// Represents an unknown or unrecognized content type.
    Unknown,
}
```

<Bottom />
