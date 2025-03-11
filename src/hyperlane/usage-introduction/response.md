---
title: 响应
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - usage-introduction
  - response
order: 6
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架没有发送响应前通过 `controller_data` 中 `get_response` 获取的只是响应的初始化实例，里面其实没有数据，
> 只有当用户发送响应时才会构建出完整 `http` 响应，此后再次 `get_response` 才能获取到响应内容

> [!tip]
>
> `hyperlane` 框架对 `controller_data` 额外封装了子字段的方法，可以直接调用大部分子字段的 `get` 和 `set` 方法名称，
> 例如：调用 `response` 上的 `get_status_code` 方法，
> 一般需要从 `controller_data` 解出 `response`，再调用 `response.get_status_code()`，
> 可以简化成 `controller_data.get_response_status_code().await` 直接调用，
> 推荐优先使用 `controller_data` 的方法，而不是通过获取 `controller_data` 写锁和读锁，
> 理论上后者性能会更好，但是后者代码可读性不高且容易导致死锁，维护成本较高。使用前者你可能写出以下代码：
>
> ```rust
> pub async fn favicon_ico(controller_data: ControllerData) {
>     let data: Vec<u8> = plugin::logo_img::func::get_logo_img();
>     {
>         let mut controller_data: RwLockWriteControllerData =
>         controller_data.get_write_lock().await;
>         let response: &mut Response = controller_data.get_mut_response();
>         response.set_header(CONTENT_TYPE, IMAGE_PNG);
>         response.set_header(CACHE_CONTROL, "public, max-age=3600");
>     }
>     let send_res: ResponseResult = controller_data.send_response(200, data).await;
>     controller_data
>         .get_log()
>         .await
>         .info(format!("Response result => {:?}", send_res), log_handler);
> }
> ```
>
> 但是使用后者，你的代码会是这样，是不是就无需担心死锁发生了
>
> ```rust
> pub async fn favicon_ico(controller_data: ControllerData) {
>     let data: Vec<u8> = plugin::logo_img::func::get_logo_img();
>     let send_res: ResponseResult = controller_data
>         .set_response_header(CONTENT_TYPE, IMAGE_PNG)
>         .await
>         .set_response_header(CACHE_CONTROL, "public, max-age=3600")
>         .await
>         .send_response(200, data)
>         .await;
>     let request: Request = controller_data.get_request().await;
>     controller_data
>         .log_info(format!("Request result => {}", request), log_handler)
>         .await
>         .log_info(format!("Response result => {:?}", send_res), log_handler)
>         .await;
> }
> ```
>
> **调用规律**
>
> - 原 `response` 的 `get` 方法的 `get` 名称后加 `response` 名称，中间使用\_拼接
> - 原 `response` 的 `set` 方法的 `set` 名称后加 `response` 名称，中间使用\_拼接

### 获取响应

#### 推荐

```rust
let response: Response = controller_data.get_response().await;
```

#### 通过写锁

```rust
let controller_data: RwLockWriteControllerData = controller_data.get_write_lock().await;
let response: Response = controller_data.get_response().clone();
```

### 获取可变响应

#### 推荐

```rust
let mut  = controller_data.get().await;
let response: &mut Response = inner_controller_data.get_mut_response();
```

#### 通过写锁

```rust
let mut controller_data: RwLockWriteControllerData = controller_data.get_write_lock().await;
let response: &mut Response = controller_data.get_mut_response();
```

### 设置响应体

#### 推荐

```rust
controller_data.set_response_body(vec![]).await;
```

#### 获取 `controller_data` 克隆

```rust
let mut response: Response = controller_data.get_response().await;
response.set_body(vec![]);
```

### 设置响应头

#### 推荐

```rust
controller_data.set_response_header("server", "hyperlane").await;
```

#### 获取 `controller_data` 克隆

```rust
let inner_controller_data: InnerControllerData = controller_data.get().await;
let mut response: Response = inner_controller_data.get_response().clone();
response.set_header("server", "hyperlane");
```

### 设置状态码

#### 推荐

```rust
controller_data.set_response_status_code(200).await;
```

#### 获取 `controller_data` 克隆

```rust
let inner_controller_data: InnerControllerData = controller_data.get().await;
let mut response: Response = inner_controller_data.get_response().clone();
response.set_status_code(200);
```

### 发送完整 HTTP 响应

> [!tip]
> 如果你已经设置了响应信息，可以直接通过 `send` 或者 `send_once` 发送。此方法常用于响应中间件用于统一发送。
> 如果是 `websocket` 则不会发送，所以可以在响应中间件放心使用

#### response.send

> [!tip]
> 发送响应后 `TCP` 连接保留

```rust
let mut  = controller_data.get().await;
let stream = inner_controller_data.get_mut_stream().clone().unwrap();
let mut response = inner_controller_data.get_response().clone();
let _ = response.set_body("hello").send(&stream);
```

#### controller_data.send_response

> [!tip]
> 发送响应后 `TCP` 连接保留
>
> - 第一个参数: 状态码
> - 第二个参数: 内容

```rust
let send_res: ResponseResult = controller_data.send_response(200, "hello hyperlane");
```

#### controller_data.send_response_once

> [!tip]
> 发送响应后 `TCP` 连接立即关闭
>
> - 第一个参数: 状态码
> - 第二个参数: 内容

```rust
let send_res: ResponseResult = controller_data.send_response_once(200, "hello hyperlane");
```

#### controller_data.send

> [!tip]
> 发送响应后 `TCP` 连接保留

```rust
let send_res: ResponseResult = controller_data.send().await;
```

#### controller_data.send_once

> [!tip]
> 发送响应后 `TCP` 连接立即关闭

```rust
let send_res: ResponseResult = controller_data.send_once().await;
```

### 仅发送响应体

> [!tip]
> 支持多次主动发送响应

#### response.send_body

```rust
let mut  = controller_data.get().await;
let stream = inner_controller_data.get_mut_stream().clone().unwrap();
let mut response = inner_controller_data.get_response().clone();
let _ = response.set_body("hello").send_body(&stream).await;
```

#### controller_data.send_response_body

```rust
let _ = controller_data
    .set_response_header(CONTENT_TYPE, TEXT_EVENT_STREAM)
    .await
    .send_response(200, vec![])
    .await;
for i in 0..6 {
    let _ = controller_data
        .send_response_body(format!("hello hyperlane => /index {}", i))
        .await;
}
```

#### controller_data.send_body

```rust
let _ = controller_data
    .set_response_header(CONTENT_TYPE, TEXT_EVENT_STREAM)
    .await
    .send_response(200, vec![])
    .await;
for i in 0..6 {
    let _ = controller_data
        .send_body()
        .await;
}
```

<Bottom />
