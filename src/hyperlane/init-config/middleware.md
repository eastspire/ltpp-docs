---
title: 中间件
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 7
---

> [!tip]
> controller_data 接口参考 [controller-data 文档](./controller-data.md)

### 设置中间件

```rust
// 省略 server 创建
server.middleware(|arc_lock_controller_data| async move {
    // code
}).await;
```

### 设置多个中间件

```rust
// 省略 server 创建
server.middleware(|arc_lock_controller_data| async move {
    // 1
}).await;
server.middleware(|arc_lock_controller_data| async move {
    // 2
}).await;
server.middleware(|arc_lock_controller_data| async move {
    // 3
}).await;
server.middleware(|arc_lock_controller_data| async move {
    // 4
}).await;
```

<Bottom />
