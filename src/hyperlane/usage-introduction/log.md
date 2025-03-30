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
order: 10
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架内置了日志功能（使用参考 [官方文档](../../hyperlane-log/README.md)）使用方式如下

### 获取日志实例

#### 推荐

```rust
let log: Log = ctx.get_log().await;
```

#### 通过写锁

```rust
let ctx_write_lock: RwLockWriteContext = ctx.get_write_lock().await;
let log: &Log = ctx_write_lock.get_log();
```

### 获取可变日志

#### 推荐

```rust
let mut  = ctx.get().await;
let log: &mut Log = inner_ctx.get_mut_log();
```

#### 通过写锁

```rust
let mut ctx: RwLockWriteContext = ctx.get_write_lock().await;
let log: &mut Log = ctx.get_mut_log();
```

### 设置日志

#### 推荐

```rust
ctx.set_log(Log::default()).await;
```

#### 通过写锁

##### 通过 `get`

```rust
let inner_ctx: InnerContext = ctx.get().await;
inner_ctx.set_log(Log::default());
```

##### 通过 `get_write_lock`

```rust
let mut ctx: RwLockWriteContext = ctx.get_write_lock().await;
ctx.set_log(Log::default());
```

### 同步写 `info` 日志

#### 推荐

```rust
ctx.log_info("test", log_handler).await;
```

#### 通过 `ctx`

```rust
let inner_ctx: InnerContext = ctx.get().await;
inner_ctx.get_log().info("test", log_handler);
```

### 异步写 `info` 日志

#### 推荐

```rust
ctx.async_log_info("test", log_handler).await;
```

#### 通过 `ctx`

```rust
let inner_ctx: InnerContext = ctx.get().await;
inner_ctx.get_log().async_info("test", log_handler);
```

### 同步写 `debug` 日志

#### 推荐

```rust
ctx.log_debug("test", log_handler).await;
```

#### 通过 `ctx`

```rust
let inner_ctx: InnerContext = ctx.get().await;
inner_ctx.get_log().debug("test", log_handler);
```

### 异步写 `debug` 日志

#### 推荐

```rust
ctx.async_log_debug("test", log_handler).await;
```

#### 通过 `ctx`

```rust
let inner_ctx: InnerContext = ctx.get().await;
inner_ctx.get_log().async_debug("test", log_handler);
```

### 同步写 `error` 日志

#### 推荐

```rust
ctx.log_error("test", log_handler).await;
```

#### 通过 `ctx`

```rust
let inner_ctx: InnerContext = ctx.get().await;
inner_ctx.get_log().error("test", log_handler);
```

### 异步写 `error` 日志

#### 推荐

```rust
ctx.async_log_error("test", log_handler).await;
```

#### 通过 `ctx`

```rust
let inner_ctx: InnerContext = ctx.get().await;
inner_ctx.get_log().async_error("test", log_handler);
```

<Bottom />
