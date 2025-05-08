---
title: 属性
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - usage-introduction
  - attribute
order: 10
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持临时上下文属性以 `key-value` 形式存储，生命周期贯穿一个完整的请求和响应
> 存储的 `value` 支持实现了`Any + Send + Sync + Clone` 的 `trait` 的类型

### 设置某个临时上下文属性

```rust
ctx.set_attribute("key", &"value").await;
```

### 获取某个临时上下文属性

```rust
let value: Option<String> = ctx.get_attribute::<String>("key").await;
```

### 移除某个临时上下文属性

```rust
ctx.remove_attribute("key").await;
```

### 清空临时上下文属性

```rust
ctx.clear_attribute().await;
```

### 额外示例

#### 设置闭包

> [!tip]
> 闭包需要实现 `Send + Sync` 的 `trait`，否则无法跨线程调用。一般不推荐 `value` 存储函数，这里只是提供一个示例

```rust
let func: &(dyn Fn(&str) + Send + Sync) = &|msg: &str| {
    print_success!("hyperlane: ", msg);
};
ctx.set_attribute("print_hyperlane", &func).await;
let print_hyperlane = ctx
    .get_attribute::<&(dyn Fn(&str) + Send + Sync)>("print_hyperlane")
    .await
    .unwrap();
print_hyperlane("test");
```

<Bottom />
