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
order: 7
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架没有发送响应前通过 `ctx` 中 `get_response` 获取的只是响应的初始化实例，里面其实没有数据，
> 只有当用户发送响应时才会构建出完整 `http` 响应，此后再次 `get_response` 才能获取到响应内容。

> [!tip]
>
> `hyperlane` 框架对 `ctx` 额外封装了子字段的方法，可以直接调用大部分子字段的 `get` 和 `set` 方法名称，
> 例如：调用 `response` 上的 `get_status_code` 方法。
>
> **调用规律**
>
> - 原 `response` 的 `get` 方法的 `get` 名称后加 `response` 名称，中间使用\_拼接。
> - 原 `response` 的 `set` 方法的 `set` 名称后加 `response` 名称，中间使用\_拼接。

### 获取响应

#### 获取 `response`

```rust
let response: Response = ctx.get_response().await;
```

#### 获取响应版本

```rust
let version: ResponseVersion = ctx.get_response_version().await;
```

#### 获取响应状态码

```rust
let status_code: ResponseStatusCode = ctx.get_response_status_code().await;
```

#### 获取响应原因短语

```rust
let reason_phrase: ResponseReasonPhrase = ctx.get_response_reason_phrase().await;
```

#### 获取完整响应头

```rust
let headers: ResponseHeaders = ctx.get_response_headers().await;
```

#### 获取某个响应头

```rust
let value: ResponseHeadersValue = ctx.get_response_header("key").await;
```

#### 获取请求体

```rust
let body: ResponseBody = ctx.get_response_body().await;
```

#### 获取 `string` 格式的请求体

```rust
let body: String = ctx.get_response_body_string().await;
```

#### 获取 `json` 格式的请求体

```rust
let body: T = ctx.get_response_body_json::<T>().await;
```

### 设置响应

#### 设置 `response`

```rust
ctx.set_response(Response::default()).await;
```

#### 设置响应体

```rust
ctx.set_response_body(vec![]).await;
```

#### 设置响应头

> [!tip]
>
> `hyperlane` 框架对响应头的 `key` 是不做大小写处理的，这点与[请求头](./request.md)的 `key` 处理方式不同。

```rust
ctx.set_response_header("server", "hyperlane").await;
```

#### 设置状态码

```rust
ctx.set_response_status_code(200).await;
```

#### 发送完整 HTTP 响应

> [!tip]
> 如果你已经设置了响应信息，可以直接通过 `send` 或者 `send_once` 发送。此方法常用于响应中间件用于统一发送。
> 如果是 `websocket` 则不会发送，所以可以在响应中间件放心使用。

##### response.send

> [!tip]
> 发送响应后 `TCP` 连接保留。

```rust
let stream: ArcRwLockStream = ctx.get_stream().await.unwrap();
let mut response: Response = ctx.get_response().await;
let _ = response.set_body("hello").send(&stream).await;
```

##### ctx.send_response

> [!tip]
> 发送响应后 `TCP` 连接保留。
>
> - 第一个参数: 状态码
> - 第二个参数: 内容

```rust
let send_res: ResponseResult = ctx.send_response(200, "hello hyperlane");
```

##### ctx.send_response_once

> [!tip]
> 发送响应后 `TCP` 连接立即关闭。
>
> - 第一个参数: 状态码
> - 第二个参数: 内容

```rust
let send_res: ResponseResult = ctx.send_response_once(200, "hello hyperlane");
```

##### ctx.send

> [!tip]
> 发送响应后 `TCP` 连接保留。

```rust
let send_res: ResponseResult = ctx.send().await;
```

##### ctx.send_once

> [!tip]
> 发送响应后 `TCP` 连接立即关闭。

```rust
let send_res: ResponseResult = ctx.send_once().await;
```

#### 仅发送响应体

> [!tip]
> 支持多次主动发送响应。

##### response.send_body

```rust
let stream: ArcRwLockStream = ctx.get_stream().await.unwrap();
let mut response: Response = ctx.get_response().await;
let _ = response.set_body("hello").send_body(&stream, false).await;
```

##### ctx.send_response_body

```rust
let _ = ctx
    .set_response_header(CONTENT_TYPE, TEXT_EVENT_STREAM)
    .await
    .send_response(200, vec![])
    .await;
for i in 0..6 {
    let _ = ctx
        .send_response_body(format!("hello hyperlane => /index {}", i))
        .await;
}
```

##### ctx.send_body

```rust
let _ = ctx
    .set_response_header(CONTENT_TYPE, TEXT_EVENT_STREAM)
    .await
    .send_response(200, vec![])
    .await;
for i in 0..6 {
    let _ = ctx.send_body().await;
}
```

<Bottom />
