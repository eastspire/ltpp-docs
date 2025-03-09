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
order: 9
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架内置了日志功能，使用方式如下

### 获取日志

#### 推荐

```rust
let log: Log = controller_data.get_log().await;
```

#### 通过写锁

```rust
let controller_data_write_lock: RwLockWriteControllerData = controller_data.get_write_lock().await;
let log: &Log = controller_data_write_lock.get_log();
```

### 获取可变日志

#### 推荐

```rust
let mut  = controller_data.get().await;
let log: &mut Log = inner_controller_data.get_mut_log();
```

#### 通过写锁

```rust
let mut controller_data: RwLockWriteControllerData = controller_data.get_write_lock().await;
let log: &mut Log = controller_data.get_mut_log();
```

### 设置日志

#### 推荐

```rust
let inner_controller_data: InnerControllerData = controller_data.get().await;
inner_controller_data.set_log(Log::default());
```

#### 通过写锁

```rust
let mut controller_data: RwLockWriteControllerData = controller_data.get_write_lock().await;
controller_data.set_log(Log::default());
```

### 写 `info` 日志

#### 推荐

```rust
controller_data.log_info("test", log_handler).await;
```

#### 通过 `controller_data`

```rust
let inner_controller_data: InnerControllerData = controller_data.get().await;
inner_controller_data.get_log().info("test", log_handler);
```

### 写 `debug` 日志

#### 推荐

```rust
controller_data.log_debug("test", log_debug_format_handler).await;
```

#### 通过 `controller_data`

```rust
let inner_controller_data: InnerControllerData = controller_data.get().await;
inner_controller_data.get_log().debug("test", log_debug_format_handler);
```

### 写 `error` 日志

#### 推荐

```rust
controller_data.log_error("test", log_debug_handler).await;
```

#### 通过 `controller_data`

```rust
let inner_controller_data: InnerControllerData = controller_data.get().await;
inner_controller_data.get_log().error("test", log_debug_handler);
```

<Bottom />
