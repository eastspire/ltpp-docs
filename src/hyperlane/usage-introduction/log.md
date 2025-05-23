---
title: 日志
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - usage-introduction
  - log
order: 11
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架内置了日志功能（使用参考 [官方文档](../../hyperlane-log/README.md)）使用方式如下：

### 获取日志实例

```rust
let log: Log = ctx.get_log().await;
```

### 设置日志

```rust
ctx.set_log(Log::default()).await;
```

### 同步写 `info` 日志

```rust
ctx.log_info("test", log_handler).await;
```

### 异步写 `info` 日志

```rust
ctx.async_log_info("test", log_handler).await;
```

### 同步写 `debug` 日志

```rust
ctx.log_debug("test", log_handler).await;
```

### 异步写 `debug` 日志

```rust
ctx.async_log_debug("test", log_handler).await;
```

### 同步写 `error` 日志

```rust
ctx.log_error("test", log_handler).await;
```

### 异步写 `error` 日志

```rust
ctx.async_log_error("test", log_handler).await;
```

<Bottom />
