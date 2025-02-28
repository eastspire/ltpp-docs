---
title: Request类型
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - type
  - request
order: 2
---

> [!tip]
>
> `Request` 内部具体类型定义如下

```rust
pub type RequestMethod = String;
pub type RequestHost = String;
pub type RequestPath = String;
pub type RequestQuerysKey = String;
pub type RequestQuerysValue = String;
pub type RequestQuerys = HashMap<RequestQuerysKey, RequestQuerysValue>;
pub type RequestBody = Vec<u8>;
pub type RequestHeadersKey = String;
pub type RequestHeadersValue = String;
pub type RequestHeaders = HashMap<RequestHeadersKey, RequestHeadersValue>;
pub type RequestNewResult = Result<Request, RequestError>;
#[derive(Debug, Clone, Lombok, PartialEq, Eq)]
pub struct Request {
    pub(super) method: RequestMethod,
    pub(super) host: RequestHost,
    pub(super) path: RequestPath,
    pub(super) querys: RequestQuerys,
    pub(super) headers: RequestHeaders,
    pub(super) body: RequestBody,
}
```

<Bottom />
