---
title: 写入文件
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
---

## 写入文件

> [!tip]
> 框架提供了 `write_to_file()` 函数用于向本地写入文件
> 文件不存在会自动创建，如果文件中间的任一目录不存在均会自动创建目录

### 参数

- `file_path`: 文件存储路径
- `content`: 存储的二进制内容

```rust
fn write_to_file(file_path: &str, content: &[u8])
```
