---
title: 路由
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
---

## 注册路由

> [!tip]
> 使用 `router` 接口进行路由注册，第一个参数是路由名称，第二个参数是路由处理函数

```rust
// 省略 server 创建
server.router("路由名称", |controller_data| {});
```
