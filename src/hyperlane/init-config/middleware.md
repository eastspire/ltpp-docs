---
title: 中间件
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - init-config
  - config
  - middleware
order: 7
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架的中间件参数类型参考 [controller-data 文档](../type/controller-data.md)

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
