---
title: Response类型
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - type
  - response
order: 3
---

<Share colorful />

> [!tip]
>
> `Response` 内部具体类型定义如下

```rust
pub type ResponseData = Vec<u8>;
pub type ResponseBody = Vec<u8>;
pub type ResponseHeadersKey = String;
pub type ResponseHeadersValue = String;
pub type ResponseHeaders = HashMap<ResponseHeadersKey, ResponseHeadersValue>;
pub type ResponseVersion = String;
pub type ResponseStatusCode = usize;
pub type ResponseReasonPhrase = String;
pub type ResponseResult = Result<(), ResponseError>;
pub type CloseStreamResult = Result<(), ResponseError>;
#[derive(Debug, Clone, Lombok, PartialEq, Eq)]
pub struct Response {
    pub(super) version: ResponseVersion,
    pub(super) status_code: ResponseStatusCode,
    pub(super) reason_phrase: ResponseReasonPhrase,
    pub(super) headers: ResponseHeaders,
    pub(super) body: ResponseBody,
    pub(super) response: ResponseData,
}
```

<Bottom />
