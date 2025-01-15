---
title: 路由
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 6
---

> [!tip]
> 使用 `router` 接口进行路由注册，第一个参数是路由名称，第二个参数是路由处理函数

> [!tip]
> controller_data 接口参考 [controller-data 文档](./controller-data.md)

## 同步路由

### 注册路由

```rust
// 省略 server 创建
server.router("路由名称", |arc_lock_controller_data| {
    // code
});
```

## 异步路由

### 注册路由

```rust
// 省略 server 创建
server.async_router("路由名称", |arc_lock_controller_data| async move {
    // code
}).await;
```

<Bottom />
