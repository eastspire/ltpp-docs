---
title: 内置Websocket处理
index: true
icon: book
category:
  - clone
  - web
  - rust
  - config
  - internal-websocket-handler
order: 9
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持配置 `websocket` 内部处理方式，默认启用，
> 值得一提的是此配置支持动态路由设置。
> 需要在路由注册的处理函数中手动处理请求。如果启用，需要设置具体的路由，则会自动处理请求缓存设置，一般用于单发场景。
> 如果不启用，则需要在业务代码中使用死循环去循环处理请求，一般用于群发场景。

## 启用框架内部 `websocket` 处理

### 静态路由

```rust
server.enable_internal_ws_handler("/路由").await;
```

### 朴素动态路由

```rust
server.enable_internal_ws_handler("/路由/{id}").await;
```

### 正则表达式动态路由

```rust
server.enable_internal_ws_handler("/路由/{number:\\d+}").await;
```

## 禁用 `websocket` 内部处理

### 静态路由

```rust
server.disable_internal_ws_handler("/路由").await;
```

### 动态路由

```rust
server.disable_internal_ws_handler("/路由/{id}").await;
```

### 正则表达式动态路由

```rust
server.disable_internal_ws_handler("/路由/{number:\\d+}").await;
```

<Bottom />
