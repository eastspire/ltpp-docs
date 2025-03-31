---
title: Attribute
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - usage-introduction
  - context
order: 9
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持临时上下文 `attribute` 数据 `k-v` 存储，生命周期贯穿一个完整的请求和响应
> 存储的 `value` 支持实现了`Any + Send + Sync + Clone` `trait` 的类型

### 设置某个临时上下文数据

```rust
ctx.set_attribute("key", &"value").await;
```

### 获取某个临时上下文数据

```rust
let value: Option<String> = ctx.get_attribute::<String>("key").await;
```

### 移除某个临时上下文数据

```rust
ctx.remove_attribute("key").await;
```

### 清空临时上下文数据

```rust
ctx.clear_attribute().await;
```

<Bottom />
