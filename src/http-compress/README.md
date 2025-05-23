---
title: HTTP压缩解压库
index: true
icon: book
category:
  - http-compress
  - compress
  - rust
dir:
  order: 22
---

<Share colorful />

[GITHUB 地址](https://github.com/eastspire/http-compress)

<center>

[![](https://img.shields.io/crates/v/http-compress.svg)](https://crates.io/crates/http-compress)
[![](https://img.shields.io/crates/d/http-compress.svg)](https://img.shields.io/crates/d/http-compress.svg)
[![](https://docs.rs/http-compress/badge.svg)](https://docs.rs/http-compress)
[![](https://github.com/eastspire/http-compress/workflows/Rust/badge.svg)](https://github.com/eastspire/http-compress/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/http-compress.svg)](./license)

</center>

[API 文档](https://docs.rs/http-compress/latest/http_compress/)

> 一个支持 Brotli、Deflate 和 Gzip 的轻量级 HTTP 响应解压库。

## 安装

要使用此 crate，可以运行以下命令：

```shell
cargo add http-compress
```

## 使用示例

### Compress 类型

```rust
use http_compress::*;
use core::hash::BuildHasherDefault;
use std::{borrow::Cow, collections::HashMap};

let headers: HashMap<_, _, BuildHasherDefault<XxHash3_64>> = HashMap::with_hasher(BuildHasherDefault::default());
let data: Vec<u8> = vec![];
let body: Cow<'_, Vec<u8>> = Compress::from(&headers).decode(&data, 1_024_000);
assert_eq!(*body, data);
```

### 编码

```rust
use http_compress::*;

let _ = Compress::Gzip.encode(&[], 1_024_000);
let _ = Compress::Deflate.encode(&[], 1_024_000);
let _ = Compress::Br.encode(&[], 1_024_000);
```

### 解码

```rust
use http_compress::*;

let _ = Compress::Gzip.decode(&[], 1_024_000);
let _ = Compress::Deflate.decode(&[], 1_024_000);
let _ = Compress::Br.decode(&[], 1_024_000);
```

## 许可证

此项目基于 MIT 许可证授权。详细信息请查看 [license](license) 文件。

## 贡献

欢迎贡献！请提交 issue 或创建 pull request。

## 联系方式

如有任何疑问，请联系作者：[root@ltpp.vip](mailto:root@ltpp.vip)。

<Bottom />
