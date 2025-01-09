---
title: 文件操作库
index: true
icon: book
category:
  - file-operation
  - file
  - rust
dir:
  order: 32
---

[GITHUB 地址](https://github.com/ltpp-universe/file-operation)

[LTPP-GIT 地址](https://git.ltpp.vip/root/file-operation)

<Share colorful />
<Catalog />

## 文件操作

[![](https://img.shields.io/crates/v/file-operation.svg)](https://crates.io/crates/file-operation)  
[![](https://docs.rs/file-operation/badge.svg)](https://docs.rs/file-operation)  
[![](https://img.shields.io/crates/l/file-operation.svg)](./LICENSE)  
[![](https://github.com/ltpp-universe/file-operation/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/file-operation/actions?query=workflow:Rust)

[官方文档](https://docs.ltpp.vip/file-operation/)

[API 文档](https://docs.rs/file-operation/latest/file_operation/)

> 一个 Rust 库，提供了一组常见的文件操作工具，如读取、写入和查询文件元数据（例如大小）。它旨在简化 Rust 项目中的文件处理，提供安全且高效的文件操作方法。

## 安装

要使用此库，可以运行以下命令：

```shell
cargo add file-operation
```

## 使用

```rust
use file_operation::*;
fn test_write_to_file() {
    let _ = write_to_file(_FILE_PATH, "test".as_bytes());
}

fn test_read_from_file() {
    let res: Vec<u8> = read_from_file(_FILE_PATH).unwrap();
    println!("{:?}", String::from_utf8_lossy(&res));
}

fn test_get_file_size() {
    let size: Option<u64> = get_file_size(_FILE_PATH);
    println!("{:?}", size);
}
```

## 许可

该项目遵循 MIT 许可协议。有关详细信息，请参阅 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系

如有任何问题，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。
