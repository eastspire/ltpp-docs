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

<Share colorful />

[GITHUB 地址](https://github.com/ltpp-universe/file-operation)

## 文件操作

<center>

[![](https://img.shields.io/crates/v/file-operation.svg)](https://crates.io/crates/file-operation)
[![](https://img.shields.io/crates/d/file-operation.svg)](https://img.shields.io/crates/d/file-operation.svg)
[![](https://docs.rs/file-operation/badge.svg)](https://docs.rs/file-operation)
[![](https://github.com/ltpp-universe/file-operation/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/file-operation/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/file-operation.svg)](./LICENSE)

</center>

[API 文档](https://docs.rs/file-operation/latest/file_operation/)

> 一个 Rust 库，提供了一组常见的文件操作工具，如读取、写入和查询文件元数据（例如大小）。它旨在简化 Rust 项目中的文件处理，提供安全且高效的文件操作方法。

## 安装

要使用此库，可以运行以下命令：

```shell
cargo add file-operation
```

## 使用

### 写入文件

**代码：**

```rust
let _ = write_to_file(FILE_PATH, "test".as_bytes());
```

**描述：**
将给定的数据（`"test".as_bytes()`）写入指定路径的文件中。

- `FILE_PATH` - 目标文件路径。
- 返回值 - 一个 `Result`，表示操作成功或失败。

### 读取文件

**代码：**

```rust
let res: Vec<u8> = read_from_file(FILE_PATH).unwrap_or_default();
```

**描述：**
读取指定路径文件的内容。

- `FILE_PATH` - 目标文件路径。
- 返回值 - 一个 `Vec<u8>`，包含文件内容，如果读取失败则返回一个空的向量。

### 获取文件大小

**代码：**

```rust
let size: Option<u64> = get_file_size(FILE_PATH);
```

**描述：**
获取指定路径文件的大小。

- `FILE_PATH` - 目标文件路径。
- 返回值 - 一个 `Option<u64>`，表示文件大小（字节数），如果文件不存在则返回 `None`。

### 复制目录文件

**代码：**

```rust
let res: Result<(), std::io::Error> = copy_dir_files(FILE_DIR, NEW_FILE_DIR);
```

**描述：**
将所有文件从 `FILE_DIR` 复制到 `NEW_FILE_DIR`。

- `FILE_DIR` - 源目录路径。
- `NEW_FILE_DIR` - 目标目录路径。
- 返回值 - 一个 `Result`，表示操作成功或失败。

### 删除文件

**代码：**

```rust
let res: Result<(), std::io::Error> = delete_file(FILE_PATH);
```

**描述：**
删除指定路径的文件。

- `FILE_PATH` - 目标文件路径。
- 返回值 - 一个 `Result`，表示操作成功或失败。

### 移动目录

**代码：**

```rust
let res: Result<(), std::io::Error> = move_dir(FILE_DIR, NEW_TEST_DIR);
```

**描述：**
将 `FILE_DIR` 目录移动到 `NEW_TEST_DIR`。

- `FILE_DIR` - 源目录路径。
- `NEW_TEST_DIR` - 目标目录路径。
- 返回值 - 一个 `Result`，表示操作成功或失败。

### 删除目录

**代码：**

```rust
let res: Result<(), std::io::Error> = delete_dir(NEW_TEST_DIR);
```

**描述：**
删除指定路径的目录。

- `NEW_TEST_DIR` - 目标目录路径。
- 返回值 - 一个 `Result`，表示操作成功或失败。

### 异步写入文件

**代码：**

```rust
let _ = async_write_to_file(FILE_PATH, "test".as_bytes()).await;
```

**描述：**
异步地将给定的数据（`"test".as_bytes()`）写入指定路径的文件中。

- `FILE_PATH` - 目标文件路径。
- 返回值 - 一个 `Result`，表示操作成功或失败。

### 异步读取文件

**代码：**

```rust
let res: Vec<u8> = async_read_from_file(FILE_PATH).await.unwrap_or_default();
```

**描述：**
异步地读取指定路径文件的内容。

- `FILE_PATH` - 目标文件路径。
- 返回值 - 一个 `Vec<u8>`，包含文件内容，如果读取失败则返回一个空的向量。

### 异步获取文件大小

**代码：**

```rust
let size: Option<u64> = async_get_file_size(FILE_PATH).await;
```

**描述：**
异步地获取指定路径文件的大小。

- `FILE_PATH` - 目标文件路径。
- 返回值 - 一个 `Option<u64>`，表示文件大小（字节数），如果文件不存在则返回 `None`。

### 异步复制目录文件

**代码：**

```rust
let res: Result<(), std::io::Error> = async_copy_dir_files(FILE_DIR, NEW_FILE_DIR).await;
```

**描述：**
异步地将所有文件从 `FILE_DIR` 复制到 `NEW_FILE_DIR`。

- `FILE_DIR` - 源目录路径。
- `NEW_FILE_DIR` - 目标目录路径。
- 返回值 - 一个 `Result`，表示操作成功或失败。

### 异步删除文件

**代码：**

```rust
let res: Result<(), std::io::Error> = async_delete_file(FILE_PATH).await;
```

**描述：**
异步地删除指定路径的文件。

- `FILE_PATH` - 目标文件路径。
- 返回值 - 一个 `Result`，表示操作成功或失败。

### 异步移动目录

**代码：**

```rust
let res: Result<(), std::io::Error> = async_move_dir(FILE_DIR, NEW_TEST_DIR).await;
```

**描述：**
异步地将 `FILE_DIR` 目录移动到 `NEW_TEST_DIR`。

- `FILE_DIR` - 源目录路径。
- `NEW_TEST_DIR` - 目标目录路径。
- 返回值 - 一个 `Result`，表示操作成功或失败。

### 异步删除目录

**代码：**

```rust
let res: Result<(), std::io::Error> = async_delete_dir(NEW_TEST_DIR).await;
```

**描述：**
异步地删除指定路径的目录。

- `NEW_TEST_DIR` - 目标目录路径。
- 返回值 - 一个 `Result`，表示操作成功或失败。

## 许可

该项目遵循 MIT 许可协议。有关详细信息，请参阅 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系

如有任何问题，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
