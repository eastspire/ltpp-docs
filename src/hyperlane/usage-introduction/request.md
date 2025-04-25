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
> `hyperlane` 框架对 `ctx` 额外封装了子字段的方法，可以直接调用大部分子字段的 `get` 和 `set` 方法名称
> 例如：调用 `request` 上的 `get_method` 方法，
> 一般需要从 `ctx` 解出 `request`，再调用`request.get_method()`，
> 可以简化成直接调用 `ctx.get_request_method().await`
>
> **调用规律**
>
> - 原 `request` 的 `get` 方法的 `get` 名称后加 `request` 名称，中间使用\_拼接
> - 原 `request` 的 `set` 方法的 `set` 名称后加 `request` 名称，中间使用\_拼接

### 获取请求信息

#### 获取 `request`

##### 推荐

```rust
let request: Request = ctx.get_request().await;
```

##### 通过读锁

```rust
let mut ctx: RwLockReadContext = ctx.get_read_lock().await;
let request: Request = ctx.get_request().clone();
```

##### 通过写锁

```rust
let mut ctx: RwLockWriteContext = ctx.get_write_lock().await;
let request: Request = ctx.get_request().clone();
```

#### 获取 `method`

```rust
let method: RequestMethod = request.get_method();
```

#### 获取 `host`

```rust
let host: RequestHost = request.get_host();
```

#### 获取 `path`

```rust
let path: RequestPath = request.get_path();
```

#### 获取 `querys`

```rust
let querys: RequestQuerys = request.get_querys();
```

#### 获取 `header`

> [!tip]
>
> `hyperlane` 框架请求头的 `key` 是经过全小写处理，所以获取请求头时需要注意 `key` 使用全小写

```rust
let header: OptionRequestHeadersValue = request.get_header("key");
```

#### 获取 `headers`

```rust
let headers: RequestHeaders = request.get_headers();
```

#### 获取请求体

```rust
let body: RequestBody = request.get_body();
```

#### 获取 `string` 格式的请求体

```rust
let body: String = request.get_body_string();
```

#### 获取 `json` 格式的请求体

```rust
let body: T = request.get_body_json::<T>();
```

### 获取可变请求信息

```rust
let mut ctx: RwLockWriteContext = ctx.get_write_lock().await;
let request: &mut Request = ctx.get_mut_request();
```

### 设置请求信息

#### 推荐

```rust
ctx.set_request(Request::default()).await;
```

#### 通过写锁

```rust
let mut ctx: RwLockWriteContext = ctx.get_write_lock().await;
ctx.set_request(Request::default());
```

### 修改请求

#### 获取写锁

```rust
let mut ctx: RwLockWriteContext = ctx.get_write_lock().await;
let request: &mut Request = ctx.get_mut_request();
```

#### 修改 `method`

```rust
request.set_method(GET.to_owned());
```

#### 修改 `host`

```rust
request.set_host("localhost".to_owned());
```

#### 修改 `path`

```rust
request.set_path("server".to_owned());
```

#### 修改 `query`

```rust
request.set_query("server", "hyperlane");
```

#### 修改 `querys`

```rust
request.set_querys(HashMap::new());
```

#### 修改 `hash`

```rust
request.set_hash("server".to_owned());
```

#### 修改 `header`

> [!tip]
>
> `hyperlane` 框架请求头的 `key` 是经过全小写处理，所以更新请求头时需要注意 `key` 使用全小写

```rust
request.set_header("server", "hyperlane");
```

#### 修改 `headers`

```rust
request.set_headers(HashMap::new());
```

#### 修改 `body`

```rust
request.set_body(vec![]);
```

#### 转字符串

##### 通过 `to_string`

> [!tip]
> 将获得完整的原始结构体字符串结构

```rust
request.to_string();
```

##### 通过 `get_string`

> [!tip]
> 将获得简化的结构体字符串结构

```rust
request.get_string();
```

<Bottom />
