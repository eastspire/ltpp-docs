---
title: 运行时
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - config
  - runtime
order: 1
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架基于 `tokio`，可以参考 `tokio` [官方文档](https://docs.rs/tokio/latest/tokio/) 进行配置

### 通过宏

```rust
#[tokio::main]
async fn main() {}
```

### 精细化配置

```rust
#[tokio::main]
async fn main() {
    let thread_count: usize = get_thread_count().max(2);
    let runtime: tokio::runtime::Runtime = tokio::runtime::Builder::new_multi_thread()
        .worker_threads(thread_count)
        .thread_stack_size(2097152)
        .max_blocking_threads(5120)
        .max_io_events_per_tick(5120)
        .enable_all()
        .build()
        .unwrap();
    runtime.spawn(async move {}).await.unwrap();
}
```

<Bottom />
