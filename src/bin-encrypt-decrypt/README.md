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

[GITHUB 地址](https://github.com/ltpp-universe/bin-encrypt-decrypt)

[LTPP-GIT 地址](https://jihulab.com/ltpp-universe/bin-encrypt-decrypt)

<Share colorful />
<Catalog />

[![](https://img.shields.io/crates/v/bin-encrypt-decrypt.svg)](https://crates.io/crates/bin-encrypt-decrypt)<br>
[![](https://docs.rs/bin-encrypt-decrypt/badge.svg)](https://docs.rs/bin-encrypt-decrypt)<br>
[![](https://img.shields.io/crates/l/bin-encrypt-decrypt.svg)](./license)<br>
[![](https://github.com/ltpp-universe/bin-encrypt-decrypt/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/bin-encrypt-decrypt/actions?query=workflow:Rust)

## 说明

> [!tip]
> 一个高性能的二进制加密和解密库，支持自定义字符集，超越 Base64 的限制。

## 功能特性

- **自定义字符集**：支持定义自己的字符集进行编码和解码，灵活表示数据。
- **高性能**：经过性能优化，适用于需要高效加密操作的场景。
- **简单易用的 API**：提供直观易用的加密和解密接口。
- **完善的错误处理**：提供清晰且描述性强的错误消息，便于调试。
- **丰富的文档**：提供详尽的指南和示例，帮助快速上手。

## 安装

运行以下命令安装 `bin-encrypt-decrypt`：

```sh
cargo add bin-encrypt-decrypt
```

## 用法

### 加密

#### 使用结构体

```rust
use bin_encrypt_decrypt::*;

let mut crypt_decrypt: CryptDecrypt<'_> = CryptDecrypt::new();
let test_str: &str = "test";
let mut charset: String = String::from("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_=");
crypt_decrypt.charset(&charset);

let encode: Result<String, CryptError> = crypt_decrypt.encrypt(test_str);
```

#### 使用函数

```rust
use bin_encrypt_decrypt::*;

let test_str: &str = "test";
let mut charset: String = String::from("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_=");

let encode: Result<String, CryptError> = encrypt(&charset, test_str);
```

### 解密

#### 使用结构体

```rust
use bin_encrypt_decrypt::*;

let mut crypt_decrypt: CryptDecrypt<'_> = CryptDecrypt::new();
let test_str: &str = "aab0aabLaabZaab0";
let mut charset: String = String::from("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_=");
crypt_decrypt.charset(&charset);

let decode: Result<String, DecryptError> = crypt_decrypt.decrypt(test_str);
```

#### 使用函数

```rust
use bin_encrypt_decrypt::*;

let test_str: &str = "aab0aabLaabZaab0";
let mut charset: String = String::from("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_=");

let decode: Result<String, DecryptError> = decrypt(&charset, test_str);
```

## 许可协议

此项目基于 MIT 许可证开源。有关详细信息，请参阅 [license](license) 文件。

## 贡献

欢迎贡献代码！请提交 issue 或 pull request。

## 联系方式

如有任何疑问，请联系作者 [ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
