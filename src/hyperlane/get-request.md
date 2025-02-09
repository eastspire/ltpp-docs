---
title: 获取请求
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 9
---

## 获取请求

```rust
// 省略 server 和 路由处理函数 创建
let controller_data = arc_lock_controller_data.write().unwrap();
let request: Request = controller_data.get_request().clone();
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

### 获取 `query`

```rust
let query = request.get_query();
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
// 省略 server 和 路由处理函数 创建
let mut controller_data = arc_lock_controller_data.write().unwrap();
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
request.set_query("server".to_owned());
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
