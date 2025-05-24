---
title: 中间件
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - config
  - middleware
order: 11
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持请求中间件和响应中间件，中间件参数类型参考 [controller-data 文档](../type/controller-data.md)。

### 请求中间件

#### 注册请求中间件

```rust
// 省略 server 创建
server.request_middleware(|ctx: Context| async move {
    // code
}).await;
```

#### 注册多个请求中间件

```rust
// 省略 server 创建
server.request_middleware(|ctx: Context| async move {
    // 1
}).await;
server.request_middleware(|ctx: Context| async move {
    // 2
}).await;
server.request_middleware(|ctx: Context| async move {
    // 3
}).await;
server.request_middleware(|ctx: Context| async move {
    // 4
}).await;
```

### 设置响应中间件

#### 注册响应中间件

```rust
// 省略 server 创建
server.response_middleware(|ctx: Context| async move {
    // code
}).await;
```

#### 注册多个响应中间件

```rust
// 省略 server 创建
server.response_middleware(|ctx: Context| async move {
    // 1
}).await;
server.response_middleware(|ctx: Context| async move {
    // 2
}).await;
server.response_middleware(|ctx: Context| async move {
    // 3
}).await;
server.response_middleware(|ctx: Context| async move {
    // 4
}).await;
```

<Bottom />
