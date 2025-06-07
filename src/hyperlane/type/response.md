---
title: Response
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - type
  - response
order: 7
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的 `Response` 内部具体类型定义如下

```rust
/// The binary body of the HTTP response.
pub type ResponseBody = Vec<u8>;
/// The body of the HTTP response represented as a UTF-8 string.
pub type ResponseBodyString = String;
/// The key type used in HTTP response headers.
pub type ResponseHeadersKey = String;
/// The value type used in HTTP response headers.
pub type ResponseHeadersValue = String;
/// A map of HTTP response headers.
pub type ResponseHeaders = HashMapXxHash3_64<ResponseHeadersKey, ResponseHeadersValue>;
/// The HTTP version of the response (e.g., "HTTP/1.1").
pub type ResponseVersion = String;
/// The numeric status code of the HTTP response (e.g., 200, 404).
pub type ResponseStatusCode = usize;
/// The reason phrase associated with the HTTP status code (e.g., "OK", "Not Found").
pub type ResponseReasonPhrase = String;
/// The result type returned after writing an HTTP response.
pub type ResponseResult = Result<(), ResponseError>;
/// The full serialized binary content of the HTTP response.
pub type ResponseData = Vec<u8>;
/// The full serialized content of the HTTP response as a UTF-8 string.
pub type ResponseDataString = String;
/// A read guard to a shared `Response` value protected by `RwLock`.
pub type RwLockReadGuardResponse<'a> = RwLockReadGuard<'a, Response>;
/// A write guard to a shared `Response` value protected by `RwLock`.
pub type RwLockWriteGuardResponse<'a> = RwLockWriteGuard<'a, Response>;
/// An optional value of a response header.
pub type OptionResponseHeadersValue = Option<ResponseHeadersValue>;

/// Represents a parsed HTTP response.
#[derive(Debug, Clone, Data, DisplayDebug)]
pub struct Response {
    /// The HTTP version used in the response.
    #[set(skip)]
    pub(super) version: ResponseVersion,
    /// The HTTP status code (e.g., 200, 404).
    pub(super) status_code: ResponseStatusCode,
    /// The reason phrase associated with the status code (e.g., "OK", "Not Found").
    #[set(skip)]
    pub(super) reason_phrase: ResponseReasonPhrase,
    /// The response headers as key-value pairs.
    pub(super) headers: ResponseHeaders,
    /// The binary body content of the response.
    #[set(skip)]
    pub(super) body: ResponseBody,
}
```

<Bottom />
