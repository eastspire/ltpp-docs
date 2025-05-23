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
///  Response body
pub type ResponseBody = Vec<u8>;
///  Response body string
pub type ResponseBodyString = String;
///  Response headers key
pub type ResponseHeadersKey = String;
///  Response headers value
pub type ResponseHeadersValue = String;
///  Response headers
pub type ResponseHeaders = HashMapXxHash3_64<ResponseHeadersKey, ResponseHeadersValue>;
/// Response version
pub type ResponseVersion = String;
/// Response status code
pub type ResponseStatusCode = usize;
/// Response reason phrase
pub type ResponseReasonPhrase = String;
///  Response result
pub type ResponseResult = Result<(), ResponseError>;
/// Response data
pub type ResponseData = Vec<u8>;
/// Response data string
pub type ResponseDataString = String;
/// RwLockReadGuardResponse
pub type RwLockReadGuardResponse<'a> = RwLockReadGuard<'a, Response>;
/// RwLockWriteGuardResponse
pub type RwLockWriteGuardResponse<'a> = RwLockWriteGuard<'a, Response>;
/// OptionResponseHeadersValue
pub type OptionResponseHeadersValue = Option<ResponseHeadersValue>;

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
