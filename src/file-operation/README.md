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

[![](https://img.shields.io/crates/v/file-operation.svg)](https://crates.io/crates/file-operation)<br>
[![](https://docs.rs/file-operation/badge.svg)](https://docs.rs/file-operation)<br>
[![](https://img.shields.io/crates/l/file-operation.svg)](./LICENSE)<br>
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
static FILE_DIR: &str = "./log";
static NEW_FILE_DIR: &str = "./new_log";
static NEW_TEST_DIR: &str = "./test_log";
static FILE_PATH: &str = "./log/test.txt";
let _ = write_to_file(FILE_PATH, "test".as_bytes());
let res: Vec<u8> = read_from_file(FILE_PATH).unwrap_or_default();
let size: Option<u64> = get_file_size(FILE_PATH);
println!("read_from_file => {:?}", String::from_utf8_lossy(&res));
println!("get_file_size => {:?}", size);
let res: Result<(), std::io::Error> = copy_dir_files(FILE_DIR, NEW_FILE_DIR);
println!("copy_dir_files => {:?}", res);
let res: Result<(), std::io::Error> = delete_file(FILE_PATH);
println!("delete_file => {:?}", res);
let res: Result<(), std::io::Error> = move_dir(FILE_DIR, NEW_TEST_DIR);
println!("move_dir => {:?}", res);
let res: Result<(), std::io::Error> = delete_dir(NEW_TEST_DIR);
println!("delete_dir => {:?}", res);
let res: Result<(), std::io::Error> = delete_dir(NEW_FILE_DIR);
println!("delete_dir => {:?}", res);
```

## 许可

该项目遵循 MIT 许可协议。有关详细信息，请参阅 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系

如有任何问题，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
