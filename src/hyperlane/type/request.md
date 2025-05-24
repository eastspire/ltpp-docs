---
title: Request
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - type
  - request
order: 5
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的 `Request` 内部具体类型定义如下

```rust
/// Request method
pub type RequestMethod = Methods;
/// Request host
pub type RequestHost = String;
/// Request version
pub type RequestVersion = HttpVersion;
/// Request path
pub type RequestPath = String;
/// Request querys key
pub type RequestQuerysKey = String;
/// Request querys value
pub type RequestQuerysValue = String;
/// Request querys
pub type RequestQuerys = HashMapXxHash3_64<RequestQuerysKey, RequestQuerysValue>;
///  Request body
pub type RequestBody = Vec<u8>;
///  Request body string
pub type RequestBodyString = String;
/// Request headers key
pub type RequestHeadersKey = String;
/// Request headers value
pub type RequestHeadersValue = String;
/// Request headers
pub type RequestHeaders = HashMapXxHash3_64<RequestHeadersKey, RequestHeadersValue>;
/// Request new result
pub type RequestNewResult = Result<Request, RequestError>;
/// RwLockReadGuardRequest
pub type RwLockReadGuardRequest<'a> = RwLockReadGuard<'a, Request>;
/// RwLockWriteGuardRequest
pub type RwLockWriteGuardRequest<'a> = RwLockWriteGuard<'a, Request>;
/// OptionRequestQuerysValue
pub type OptionRequestQuerysValue = Option<RequestQuerysValue>;
/// OptionRequestHeadersValue
pub type OptionRequestHeadersValue = Option<RequestHeadersValue>;

/// Represents an HTTP request.
///
/// # Fields
/// - `method`: The HTTP method of the request.
/// - `host`: The host of the request.
/// - `version`: The version of the request.
/// - `path`: The path of the request.
/// - `querys`: The query string of the request.
/// - `headers`: A collection of HTTP headers as key-value pairs.
/// - `body`: The binary body of the request.
#[derive(Debug, Clone, Data, DisplayDebug)]
pub struct Request {
    #[set(skip)]
    pub(super) method: RequestMethod,
    #[set(skip)]
    pub(super) host: RequestHost,
    #[set(skip)]
    pub(super) version: RequestVersion,
    #[set(skip)]
    pub(super) path: RequestPath,
    pub(super) querys: RequestQuerys,
    pub(super) headers: RequestHeaders,
    #[set(skip)]
    pub(super) body: RequestBody,
}
```

<Bottom />
