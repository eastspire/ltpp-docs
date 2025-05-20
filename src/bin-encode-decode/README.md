---
title: 二进制加解密库
index: true
icon: book
category:
  - bin
  - encrypt
  - decrypt
  - rust
dir:
  order: 21
---

<Share colorful />

[GITHUB 地址](https://github.com/eastspire/bin-encode-decode)

<center>

[![](https://img.shields.io/crates/v/bin-encode-decode.svg)](https://crates.io/crates/bin-encode-decode)
[![](https://img.shields.io/crates/d/bin-encode-decode.svg)](https://img.shields.io/crates/d/bin-encode-decode.svg)
[![](https://docs.rs/bin-encode-decode/badge.svg)](https://docs.rs/bin-encode-decode)
[![](https://github.com/eastspire/bin-encode-decode/workflows/Rust/badge.svg)](https://github.com/eastspire/bin-encode-decode/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/bin-encode-decode.svg)](./license)

</center>

高性能二进制编码和解码库：支持超越 Base64 的自定义字符集

#### 特性

- **自定义字符集**：可定义自己的字符集用于编码和解码，从而实现灵活的数据表示。
- **高性能**：经过速度优化，适用于需要高效加密操作的应用程序。
- **简单的 API**：编码和解码过程都有直观且易于使用的接口。
- **强大的错误处理**：提供清晰且具描述性的错误消息，便于调试。
- **丰富的文档**：有全面的指南和示例，帮助你快速上手。

#### 安装

要安装 `bin-encode-decode`，请运行以下命令：

```sh
cargo add bin-encode-decode
```

#### 使用方法

##### 编码

###### 使用结构体

```rust
use bin_encode_decode::*;
let mut en_decode: Endecode<'_> = Endecode::new();
let test_str: &str = "test";
let mut charset: String = String::from("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_=");
en_decode.charset(&charset);
let encode: Result<String, EncodeError> = en_decode.encode(test_str);
```

###### 使用函数

```rust
use bin_encode_decode::*;
let test_str: &str = "test";
let mut charset: String = String::from("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_=");
let encode: Result<String, EncodeError> = encode(&charset, test_str);
```

##### 解码

###### 使用结构体

```rust
use bin_encode_decode::*;
let mut en_decode: Endecode<'_> = Endecode::new();
let test_str: &str = "aab0aabLaabZaab0";
let mut charset: String = String::from("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_=");
en_decode.charset(&charset);
let decode: Result<String, DecodeError> = en_decode.decode(test_str);
```

###### 使用函数

```rust
use bin_encode_decode::*;
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_=";
let encoded_str = "aab0aabLaabZaab0";
let decoded_str = decode(charset, encoded_str);
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_=";
let original_str = "test";
let encoded_str = encode(charset, original_str);
```

## 许可协议

此项目基于 MIT 许可证开源。有关详细信息，请参阅 [license](license) 文件。

## 贡献

欢迎贡献代码！请提交 issue 或 pull request。

## 联系方式

如有任何疑问，请联系作者 [root@ltpp.vip](mailto:root@ltpp.vip)。

<Bottom />
