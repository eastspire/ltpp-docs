---
title: 线程池大小
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 5
---

## 设置线程池大小

> [!tip]
> hyperlane 使用 tokio 的线程池，所以可以参考 tokio 进行配置

```rust
#[tokio::main(worker_threads = 4)]
async fn main() {}
```

<Bottom />
