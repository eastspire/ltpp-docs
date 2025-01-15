---
title: 中间件
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 5
---

> [!tip]
> controller_data 接口参考 [controller-data 文档](./controller-data.md)

## 设置中间件

```rust
// 省略 server 创建
server.middleware(|arc_lock_controller_data| {
    // code
});
```

## 设置多个中间件

```rust
// 省略 server 创建
server.middleware(|arc_lock_controller_data| {
    // 1
});
server.middleware(|arc_lock_controller_data| {
    // 2
});
server.middleware(|arc_lock_controller_data| {
    // 3
});
server.middleware(|arc_lock_controller_data| {
    // 4
});
```

<Bottom />
