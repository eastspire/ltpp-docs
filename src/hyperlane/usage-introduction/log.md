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
order: 6
---

<Share colorful />

### 获取日志

#### 推荐

```rust
let log: Log = arc_lock_controller_data.get_log().await;
```

#### 通过写锁

```rust
let controller_data: RwLockWriteControllerData = arc_lock_controller_data.get_write_lock().await;
let log: &Log = controller_data.get_log();
```

### 获取可变日志

#### 推荐

```rust
let mut controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
let log: &mut Log = controller_data.get_mut_log();
```

#### 通过写锁

```rust
let mut controller_data: RwLockWriteControllerData = arc_lock_controller_data.get_write_lock().await;
let log: &mut Log = controller_data.get_mut_log();
```

### 设置日志

#### 推荐

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
controller_data.set_log(Log::default());
```

#### 通过写锁

```rust
let mut controller_data: RwLockWriteControllerData = arc_lock_controller_data.get_write_lock().await;
controller_data.set_log(Log::default());
```

### 写 `info` 日志

#### 推荐

```rust
arc_lock_controller_data.log_info("test", log_handler).await;
```

#### 通过 `controller_data`

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
controller_data.get_log().info("test", log_handler);
```

### 写 `debug` 日志

#### 推荐

```rust
arc_lock_controller_data.log_debug("test", log_debug_format_handler).await;
```

#### 通过 `controller_data`

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
controller_data.get_log().debug("test", log_debug_format_handler);
```

### 写 `error` 日志

#### 推荐

```rust
arc_lock_controller_data.log_error("test", log_debug_handler).await;
```

#### 通过 `controller_data`

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
controller_data.get_log().error("test", log_debug_handler);
```

<Bottom />
