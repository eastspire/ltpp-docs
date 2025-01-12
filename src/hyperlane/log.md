---
title: 日志
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 12
---

> [!tip]
> hyperlane 日志使用了 `hyperlane-log` 库
> 使用参考 [官方文档](../hyperlane-log/README.md)

## 设置日志存储目录

```rust
// 省略 server 创建
server.log_dir("./logs");
```

## 设置日志单个存储大小（单位：字节）

```rust
// 省略 server 创建
server.log_size(1_024_000);
```

<Bottom />
