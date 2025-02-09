---
title: 中国身份证号校验库
index: true
icon: book
category:
  - china_identification_card
  - id
  - card
  - rust
dir:
  order: 18
---

<Share colorful />
<Catalog />

[GITHUB 地址](https://github.com/ltpp-universe/china_identification_card)

<center>

[![](https://img.shields.io/crates/v/china_identification_card.svg)](https://crates.io/crates/china_identification_card)
[![](https://docs.rs/china_identification_card/badge.svg)](https://docs.rs/china_identification_card)
[![](https://github.com/ltpp-universe/china_identification_card/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/china_identification_card/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/china_identification_card.svg)](./license)

</center>

## 说明

> [!tip]
> 一个用于根据官方规则和校验位对中国身份证号码进行校验的 Rust 库。

## 功能

- 校验中国身份证号码的长度和格式
- 根据官方的权重因子计算并校验校验位
- 轻量且易于集成

## 安装

使用此库，可以运行以下命令：

```shell
cargo add china_identification_card
```

## 示例

```rust
use china_identification_card::*;
let is_valid: bool = is_valid_id_number("110101202311012176");
```

## 许可证

此项目基于 MIT 许可证发布。更多详情见 [license](license) 文件。

## 贡献

欢迎贡献！请提交 issue 或拉取请求（pull request）。

## 联系方式

如有任何疑问，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
