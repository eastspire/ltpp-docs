---
title: 请求
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 4
---

> [!tip]
> 框架对 `arc_lock_controller_data` 额外封装了子字段的方法，可以直接调用大部分子字段的`get`和`set`方法名称
> 例如：调用 `request` 上的 `get_method` 方法
> 一般需要从 arc_lock_controller_data 解出 request，再调用`request.get_method()`，可以简化成直接调用 `arc_lock_controller_data.get_request_method().await`
> 调用规律:
>
> - 原 `request` 的 `get` 方法的 `get` 名称后加 `request` 名称，中间使用\_拼接
> - 原 `request` 的 `set` 方法的 `set` 名称后加 `request` 名称，中间使用\_拼接

### 获取请求信息

```rust
let controller_data = arc_lock_controller_data.get_write_lock().await;
let request: Request = controller_data.get_request().clone();
```

### 获取可变请求信息

```rust
let mut controller_data = arc_lock_controller_data.get_write_lock().await;
let request: &mut Request = controller_data.get_mut_request();
```

### 设置请求信息

#### 推荐

```rust
let controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
controller_data.set_request(Request::default());
```

#### 通过写锁

```rust
let mut controller_data = arc_lock_controller_data.get_write_lock().await;
controller_data.set_request(Request::default());
```

### 获取 `method`

```rust
let method = request.get_method();
```

### 获取 `host`

```rust
let host = request.get_host();
```

### 获取 `path`

```rust
let path = request.get_path();
```

### 获取 `querys`

```rust
let querys = request.get_querys();
```

### 获取 `hash`

```rust
let hash = request.get_hash();
```

### 获取 `headers`

```rust
let headers = request.get_headers();
```

### 获取 `body`

```rust
let body = request.get_body();
```

## 修改请求

```rust
let mut controller_data: ControllerData = arc_lock_controller_data.get_controller_data().await;
let request: &mut Request = controller_data.get_mut_request();
```

### 修改 `method`

```rust
request.set_method(GET.to_owned());
```

### 修改 `host`

```rust
request.set_host("localhost".to_owned());
```

### 修改 `path`

```rust
request.set_path("server".to_owned());
```

### 修改 `query`

```rust
request.set_query("server", "hyperlane");
```

### 修改 `querys`

```rust
request.set_querys(HashMap::new());
```

### 修改 `hash`

```rust
request.set_hash("server".to_owned());
```

### 修改 `headers`

```rust
request.set_header("server", "hyperlane");
```

```rust
request.set_headers(HashMap::new());
```

### 修改 `body`

```rust
request.set_body(vec![]);
```

<Bottom />
