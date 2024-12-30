---
title: 中间件
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
dir:
  order: 5
---

## 设置中间件

```rust
// 省略 server 创建
server.middleware(|controller_data| {});
```

## 设置多个中间件

```rust
// 省略 server 创建
server.middleware(|controller_data| {
    // 1
});
server.middleware(|controller_data| {
    // 2
});
server.middleware(|controller_data| {
    // 3
});
server.middleware(|controller_data| {
    // 4
});
```
