---
title: 可恢复线程
index: true
icon: book
category:
  - recoverable-spawn
  - spawn
  - rust
dir:
  order: 33
---

<Share colorful />

[GITHUB 地址](https://github.com/ltpp-universe/recoverable-spawn)

<center>

[![](https://img.shields.io/crates/v/recoverable-spawn.svg)](https://crates.io/crates/recoverable-spawn)
[![](https://docs.rs/recoverable-spawn/badge.svg)](https://docs.rs/recoverable-spawn)
[![](https://github.com/ltpp-universe/recoverable-spawn/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/recoverable-spawn/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/recoverable-spawn.svg)](./LICENSE)

</center>

[API 文档](https://docs.rs/recoverable-spawn/latest/recoverable_spawn/)

> 一个库，用于在 panic 后自动重启线程。它在发生意外错误时，确保线程继续运行。它提供了一种简单有效的机制，捕获 panic，重启线程，并可以选择性地记录错误，用于监控和调试。

## 安装

要使用此库，可以运行以下命令：

```shell
cargo add recoverable-spawn
```

## 使用

### recoverable_spawn

```rust
use recoverable_spawn::*;
let msg: &str = "test";
let handle: JoinHandle<()> = recoverable_spawn(move || {
    panic!("{}", msg);
});
let _ = handle.join();
let handle: JoinHandle<()> = recoverable_spawn_with_error_handle(
    move || {
        panic!("{}", msg);
    },
    |err| {
        println!("handle error => {}", err);
    },
);
let _ = handle.join();
```

### recoverable_spawn_with_error_handle

```rust
use recoverable_spawn::*;
let msg: &str = "test";
let handle: JoinHandle<()> = recoverable_spawn_with_error_handle(
    move || {
        panic!("{}", msg);
    },
    |err| {
        println!("handle error => {}", err);
    },
);
let _ = handle.join();
```

### async_recoverable_spawn

```rust
use recoverable_spawn::*;
let msg: &str = "test";
let handle: JoinHandle<()> = async_recoverable_spawn(move || async move {
    panic!("{}", msg);
});
let _ = handle.join();
```

### async_recoverable_spawn_catch

```rust
use recoverable_spawn::*;
let msg: &str = "test";
let handle: JoinHandle<()> = async_recoverable_spawn_catch(
    move || async move {
        panic!("{}", msg);
    },
    move |err| async move {
        println!("handle error => {}", err);
    },
);
let _ = handle.join();
```

### async_recoverable_spawn_catch_finally

```rust
use recoverable_spawn::*;
let msg: &str = "test";
let handle: JoinHandle<()> = async_recoverable_spawn_catch_finally(
    move || async move {
        panic!("{}", msg);
    },
    move |err| async move {
        println!("handle error => {}", err);
        panic!("{}", err);
    },
    move || async move {
        println!("finally");
    },
);
let _ = handle.join();
```

## 许可证

此项目使用 MIT 许可证。详细信息请参见 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系

如有任何疑问，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
