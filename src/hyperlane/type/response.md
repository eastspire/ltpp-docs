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
order: 3
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的 `Response` 内部具体类型定义如下

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
#[derive(Debug, Clone, Lombok, PartialEq, Eq)]
pub struct Response {
    #[set(skip)]
    pub(super) version: ResponseVersion,
    pub(super) status_code: ResponseStatusCode,
    #[set(skip)]
    pub(super) reason_phrase: ResponseReasonPhrase,
    pub(super) headers: ResponseHeaders,
    #[set(skip)]
    pub(super) body: ResponseBody,
    #[set(super)]
    pub(super) response: ResponseData,
}
```

<Bottom />
