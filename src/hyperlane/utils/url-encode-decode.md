---
title: Url编解码
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - utils
  - url-encode-decode
order: 11
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架使用了 `urlencoding` 库（框架已内置，无需额外安装和导入），可以实现 `url` 编解码。

### 编码

```rust
let test_encode: std::borrow::Cow<'_, str> = urlencoding::encode("test");
```

### 解码

```rust
let test_decode: Result<std::borrow::Cow<'_, str>, std::string::FromUtf8Error> = urlencoding::decode(&test_encode.into_owned());
```

<Bottom />
