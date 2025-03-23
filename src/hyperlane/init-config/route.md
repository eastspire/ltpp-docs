---
title: 路由
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - init-config
  - config
  - route
order: 10
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架使用 `route` 接口进行路由注册，第一个参数是路由名称，第二个参数是路由处理函数，
> 路由处理函数参数类型参考 [controller-data 文档](../type/controller-data.md)

### 注册路由

```rust
// 省略 server 创建
server.route("路由名称", |controller_data| async move {
    // code
}).await;
```

<Bottom />
