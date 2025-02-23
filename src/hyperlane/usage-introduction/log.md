---
title: 修改日志
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 6
---

### 获取日志

```rust
let controller_data = arc_lock_controller_data.get_write_lock().await;
let log: &Log = controller_data.get_log();
```

### 获取可变日志

#### 推荐

```rust
let mut controller_data: ControllerData = arc_lock_controller_data.get_clone().await;
let log: &mut Log = controller_data.get_mut_log();
```

#### 通过写锁

```rust
let mut controller_data = arc_lock_controller_data.get_write_lock().await;
let log: &mut Log = controller_data.get_mut_log();
```

### 设置日志

#### 推荐

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_clone().await;
controller_data.set_log(Log::default());
```

#### 通过写锁

```rust
let mut controller_data = arc_lock_controller_data.get_write_lock().await;
controller_data.set_log(Log::default());
```

<Bottom />
