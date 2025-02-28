---
title: StatusCode类型
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - type
  - status-code
order: 4
---

<Share colorful />

> [!tip]
>
> `StatusCode` 内部具体类型定义如下

```rust
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum StatusCode {
    /// 200 OK
    Ok,
    /// 201 Created
    Created,
    /// 204 No Content
    NoContent,
    /// 400 Bad Request
    BadRequest,
    /// 401 Unauthorized
    Unauthorized,
    /// 403 Forbidden
    Forbidden,
    /// 404 Not Found
    NotFound,
    /// 500 Internal Server Error
    InternalServerError,
    /// 501 Not Implemented
    NotImplemented,
    /// 502 Bad Gateway
    BadGateway,
    /// Unknown status code
    Unknown,
}
pub type StatusCodeUsize = usize;
```

<Bottom />
