---
title: 线程池大小
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
---

## 设置线程池大小

> [!tip]
> 默认数值为 CPU 线程数
> 框架提供了 `get_thread_count()` 函数用于获取当前 CPU 线程数

```rust
// 省略 server 创建
server.thread_pool_size(10);
```
