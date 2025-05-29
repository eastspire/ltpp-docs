---
title: 请求
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - usage-introduction
  - request
order: 4
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架对 `ctx` 额外封装了子字段的方法，可以直接调用大部分子字段的 `get` 和 `set` 方法名称。
> 例如：调用 `request` 上的 `get_method` 方法，
> 一般需要从 `ctx` 解出 `request`，再调用`request.get_method()`，
> 可以简化成直接调用 `ctx.get_request_method().await`。
>
> **调用规律**
>
> - 原 `request` 的 `get` 方法的 `get` 名称后加 `request` 名称，中间使用\_拼接。
> - 原 `request` 的 `set` 方法的 `set` 名称后加 `request` 名称，中间使用\_拼接。

### 获取请求信息

#### 获取 `request`

```rust
let request: Request = ctx.get_request().await;
```

#### 获取 `method`

```rust
let method: RequestMethod = ctx.get_request_method().await;
```

#### 获取 `host`

```rust
let host: RequestHost = ctx.get_request_host().await;
```

#### 获取 `path`

```rust
let path: RequestPath = ctx.get_request_path().await;
```

#### 获取 `querys`

```rust
let querys: RequestQuerys = ctx.get_request_querys().await;
```

#### 获取 `header`

> [!tip]
>
> `hyperlane` 框架请求头的 `key` 是经过全小写处理，所以获取请求头时需要注意 `key` 使用全小写。

```rust
let header: OptionRequestHeadersValue = ctx.get_request_header("key").await;
```

#### 获取 `headers`

```rust
let headers: RequestHeaders = ctx.get_request_headers().await;
```

#### 获取请求体

```rust
let body: RequestBody = ctx.get_request_body().await;
```

#### 获取 `string` 格式的请求体

```rust
let body: String = ctx.get_request_body_string().await;
```

#### 获取 `json` 格式的请求体

```rust
let body: T = ctx.get_request_body_json::<T>().await;
```

### 设置请求

#### 设置 `request`

```rust
ctx.set_request(Request::default()).await;
```

### 转字符串

#### 通过 `to_string`

> [!tip]
> 将获得完整的原始结构体字符串结构。

```rust
ctx.get_request().await.to_string();
```

#### 通过 `get_string`

> [!tip]
> 将获得简化的结构体字符串结构。

```rust
ctx.get_request().await.get_string();
```

<Bottom />
