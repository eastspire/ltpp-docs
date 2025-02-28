---
title: 线程池大小
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - init-config
  - config
  - thread-pool-size
order: 1
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架基于 `tokio`，可以参考 `tokio` 进行配置

```rust
#[tokio::main(worker_threads = 4)]
async fn main() {}
```

<Bottom />
