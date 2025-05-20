---
title: chunkify
index: true
icon: book
category:
  - chunkify
dir:
  order: 42
---

<Share colorful />

[GITHUB 地址](https://github.com/eastspire/chunkify)

<center>

[![](https://img.shields.io/crates/v/chunkify.svg)](https://crates.io/crates/chunkify)
[![](https://img.shields.io/crates/d/chunkify.svg)](https://img.shields.io/crates/d/chunkify.svg)
[![](https://docs.rs/chunkify/badge.svg)](https://docs.rs/chunkify)
[![](https://github.com/eastspire/chunkify/workflows/Rust/badge.svg)](https://github.com/eastspire/chunkify/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/chunkify.svg)](./LICENSE)

</center>

[API 文档](https://docs.rs/chunkify/latest/chunkify/)

> 一个简单高效的 Rust 分块处理库。

## 安装

使用该 crate，你可以运行以下命令：

```shell
cargo add chunkify
```

## 使用示例

```rust
use chunkify::*;

let chunk_strategy: ChunkStrategy<'_> = ChunkStrategy::new(
    0,
    "./uploads",
    "abcdefg",
    "test.txt",
    1,
    |file_id: &str, chunk_index: usize| format!("{file_id}.{chunk_index}"),
)
.unwrap();
chunk_strategy.save_chunk(b"test", 0).await.unwrap();
chunk_strategy.merge_chunks().await.unwrap();
```

## 许可证

本项目采用 MIT 许可证，详情请参阅 [LICENSE](LICENSE) 文件。

## 贡献指南

欢迎贡献代码！你可以提交 issue 或 pull request。

## 联系方式

如有任何问题，请联系作者：[root@ltpp.vip](mailto:root@ltpp.vip)。

<Bottom />
