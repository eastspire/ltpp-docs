---
title: 日志
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 2
---

> [!tip]
> hyperlane 日志使用了 `hyperlane-log` 库，框架已默认导入，无需额外安装和导入
> 使用参考 [官方文档](../hyperlane-log/README.md)

## 日志处理函数

> 格式为当前时间: 日志信息

### log_handler

```rust
pub fn log_handler<T: ToString>(log_data: &T) -> String
```

### log_debug_handler

```rust
pub fn log_debug_handler<T: std::fmt::Debug>(log_data: &T) -> String
```

### log_debug_format_handler

```rust
pub fn log_debug_format_handler<T: std::fmt::Debug>(log_data: &T) -> String
```

<Bottom />
