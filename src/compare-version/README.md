---
title: 版本比较库
index: true
icon: book
category:
  - compare_version
  - compare
  - version
  - rust
dir:
  order: 19
---

<Share colorful />

[GITHUB 地址](https://github.com/ltpp-universe/compare_version)

<center>

[![](https://img.shields.io/crates/v/compare_version.svg)](https://crates.io/crates/compare_version)
[![](https://img.shields.io/crates/d/compare_version.svg)](https://img.shields.io/crates/d/compare_version.svg)
[![](https://docs.rs/compare_version/badge.svg)](https://docs.rs/compare_version)
[![](https://github.com/ltpp-universe/compare_version/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/compare_version/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/compare_version.svg)](./license)

</center>

## 说明

> [!tip]
> 这是一个用于比较语义版本字符串和检查版本兼容性的 Rust 库。

## 特性

- **版本比较**：比较两个语义版本字符串，以确定它们的顺序（大于、小于、等于）。
- **版本范围匹配**：检查特定版本是否匹配指定范围，支持 `^` 和 `~` 语法。
- **预发布支持**：正确处理预发布版本的比较逻辑。
- **错误处理**：提供全面的错误类型，以优雅地处理版本解析和范围问题。

## 安装

要使用此库，可以运行以下命令：

```shell
cargo add COMPARE_VERSION
```

## 示例

```rust
use compare_version::*;
let result = compare_versions("1.2.3", "1.2.4");
assert_eq!(result, Ok(VersionComparison::Less));
let matches = matches_version_range("1.2.3", "^1.2.0");
assert_eq!(matches, Ok(true));
let matches = matches_version_range("1.2.3", "~1.2.4");
assert_eq!(matches, Ok(false));
```

## 许可

本项目根据 MIT 许可证发布。详细信息请参见 [license](license) 文件。

## 贡献

欢迎贡献！请提出问题或提交拉取请求。

## 联系

如有任何疑问，请联系作者 [ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
