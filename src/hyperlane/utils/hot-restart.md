---
title: 热重启
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - utils
  - hot-restart
order: 3
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架推荐使用 `cargo-watch` 进行热重启， [`cargo-watch`](https://github.com/watchexec/cargo-watch) 是一个 `rust` 语言的命令行工具，它可以监控 `rust` 项目的文件变化，并在文件变化时自动重新编译和运行项目。其中 [快速开始](../quick-start/README.md) 已经内置了 `cargo-watch`，你可以直接使用。

### 安装

```sh
cargo install cargo-watch
```

### 使用

### 以 `debug` 模式运行

```sh
cargo watch -x run
```

### 以 `release` 模式运行

```sh
cargo watch -x "run --release"
```

<Bottom />
