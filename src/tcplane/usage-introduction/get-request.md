---
title: 获取请求
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 4
---

## 获取请求

```rust
// 省略 server 和 路由处理函数 创建
let controller_data: ControllerData = get_controller_data(&arc_lock_controller_data);
let request: Request = controller_data.get_request().clone();
```

## 获取可变请求

```rust
// 省略 server 和 路由处理函数 创建
let mut controller_data: RwLockWriteControllerData =
        get_rw_lock_write_controller_data(&arc_lock_controller_data);
let request: &mut Vec<u8> = controller_data.get_mut_request();
```

<Bottom />
