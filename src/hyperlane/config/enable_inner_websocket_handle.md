---
title: Websocket内部处理
index: true
icon: book
category:
  - clone
  - web
  - rust
  - config
  - log
order: 9
---

<Share colorful />

## 启用 `websocket` 内部处理

> [!tip]
>
> `hyperlane` 框架支持配置 `websocket` 内部处理方式，默认不启用，
> 值得一提的是 `enable_inner_websocket_handle` 支持动态路由设置。
> 需要在路由注册的处理函数中手动处理请求。如果启用，需要设置具体的路由，则会自动处理请求缓存设置，一般用于单发场景。
> 如果不启用，则需要在业务代码中使用死循环去循环处理请求，一般用于群发场景。

```rust
server.enable_inner_websocket_handle("/路由").await;
```
