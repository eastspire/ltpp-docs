---
title: 火焰图
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - help
  - flamegraph
order: 7
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架使用 `flamegraph`，使用前提是需要有 `perf` 环境，生成火焰图步骤如下：

### 安装

```sh
cargo install flamegraph
```

### 使用

```sh
CARGO_PROFILE_RELEASE_DEBUG=true cargo flamegraph --release
```

<Bottom />
