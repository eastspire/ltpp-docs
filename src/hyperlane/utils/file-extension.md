---
title: 文件扩展名
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - utils
  - file-extension
order: 10
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架提供了 `FileExtension`， 它提供了获取路径的文件后缀名以及文件后缀名转 `content-type` 等方法。

### 使用

```rust
let extension_name: String = FileExtension::get_extension_name(path);
let content_type: &str = FileExtension::parse(&extension_name).get_content_type();
```

<Bottom />
