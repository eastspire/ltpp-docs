---
title: ControllerData类型
index: true
icon: book
category:
  - tcplane
  - web
  - rust
---

> [!tip]
> ControllerData 作为中间件和响应处理函数的参数类型，具体类型定义如下

```rust
#[derive(Clone, Debug, Lombok)]
pub struct ControllerData {
    pub(super) stream: OptionArcTcpStream,
    pub(super) request: Request,
    pub(super) response: Response,
    pub(super) log: Log,
}
```

## 请求

### 获取请求信息

```rust
let request: Request = controller_data.get_request().clone();
```

### 获取可变请求信息

```rust
let request: &mut Request = controller_data.get_mut_request();
```

### 设置请求信息

```rust
controller_data.set_request(Request::default());
```

## stream

### 获取 `stream`

```rust
let stream: Arc<TcpStream> = controller_data.get_stream().clone().unwrap();
```

### 获取可变 `stream`

```rust
controller_data.get_mut_stream().and_then(|mut stream| {});
```

### 设置 `stream`

```rust
controller_data.set_stream(None);
```

## 响应

### 获取响应

```rust
let response: Response = controller_data.get_response().clone();
```

### 获取可变响应

```rust
let response: &mut Response = controller_data.get_mut_response();
```

### 设置响应

```rust
controller_data.set_response(Response::default());
```

## 日志

### 获取日志

```rust
let log: &Log = controller_data.get_log();
```

### 获取可变日志

```rust
let log: &mut Log = controller_data.get_mut_log();
```

### 设置日志

```rust
controller_data.set_log(Log::default());
```
