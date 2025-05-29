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
/// Request reader handle result
pub type RequestReaderHandleResult = Result<Request, RequestError>;
/// RwLockReadGuardRequest
pub type RwLockReadGuardRequest<'a> = RwLockReadGuard<'a, Request>;
/// RwLockWriteGuardRequest
pub type RwLockWriteGuardRequest<'a> = RwLockWriteGuard<'a, Request>;
/// OptionRequestQuerysValue
pub type OptionRequestQuerysValue = Option<RequestQuerysValue>;
/// OptionRequestHeadersValue
pub type OptionRequestHeadersValue = Option<RequestHeadersValue>;

/// Represents an HTTP response.
///
/// # Fields
/// - `version`: The HTTP version of the response.
/// - `status_code`: The status code of the response.
/// - `reason_phrase`: The reason phrase corresponding to the status code.
/// - `headers`: A collection of HTTP headers as key-value pairs.
/// - `body`: The binary body of the response.
#[derive(Debug, Clone, Data, DisplayDebug)]
pub struct Response {
    #[set(skip)]
    pub(super) version: ResponseVersion,
    pub(super) status_code: ResponseStatusCode,
    #[set(skip)]
    pub(super) reason_phrase: ResponseReasonPhrase,
    pub(super) headers: ResponseHeaders,
    #[set(skip)]
    pub(super) body: ResponseBody,
}
```

<Bottom />
