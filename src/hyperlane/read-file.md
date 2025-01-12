---
title: 读取文件
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - rust
order: 18
---

## 写入文件

> [!tip]
> 框架提供了 `read_from_file()` 函数用于向本地读取文件，需要注意的是需要指定读取成功后以什么类型返回

### 参数

- `file_path`: 文件路径

### 返回值

- `Result<T, Box<dyn std::error::Error>>`

### 函数签名

```rust
fn read_from_file<T>(file_path: &str) -> Result<T, Box<dyn std::error::Error>>
where
    T: FromStr,
    T::Err: std::error::Error + 'static
```

### 使用

```rust
let data: Result<String, Box<dyn std::error::Error>> = read_from_file::<String>("./test.txt");
```

<Bottom />
