---
title: 框架内部处理http
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

> [!tip]
>
> `hyperlane` 框架支持配置 `http` 内部处理方式，默认启用，
> 值得一提的是此配置支持动态路由设置。

## 启用 `http` 内部处理

### 静态路由

```rust
server.enable_inner_http_handle("/路由").await;
```

### 动态路由

```rust
server.enable_inner_http_handle("/路由/:id").await;
```

## 禁用 `http` 内部处理

### 静态路由

```rust
server.disable_inner_http_handle("/路由").await;
```

### 动态路由

```rust
server.disable_inner_http_handle("/路由/:id").await;
```
