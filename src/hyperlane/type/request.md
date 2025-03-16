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
order: 2
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的 `Request` 内部具体类型定义如下

```rust
pub type RequestMethod = Methods;
pub type RequestHost = String;
pub type RequestVersion = HttpVersion;
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
