---
title: Rust开发规范
index: true
icon: book
category:
  - development-standards
  - rust
dir:
  order: 1
---

<Share colorful />

## 命名

- 变量名使用蛇形命名法
- 常量名使用全大写字母，单词之间用下划线分隔
- 函数名使用蛇形命名法
- 结构体名使用大驼峰命名法
- 枚举名使用大驼峰命名法
- 模块名使用蛇形命名法
- 宏名使用蛇形命名法

## Package

- `lib` 项目包在根 `crate` 导入依赖，子模块引入根 `crate`
- `bin` 项目包在各自 `mod` 导入依赖

## Cargo.lock

- `lib` 项目不需要上传 `lock` 文件
- `bin` 项目需要上传 `lock` 文件

## Monorepo

- 需要尽可能拆分子 `crate`

## 目录

- 目录名根据功能划分，例如 `utils` 等
- 目录下文件名根据关键字划分，例如 `fn.rs, const.rs, struct.rs, enum.rs` 等

## 导入

- 优先导入顺序：pub use、pub(crate)、pub(super)
- 其次导入顺序：本地库、标准库、外部库

```rust
pub(crate) mod cfg;
pub(crate) mod config;
pub(crate) mod context;
pub(crate) mod error;
pub(crate) mod handler;
pub(crate) mod middleware;
pub(crate) mod route;
pub(crate) mod server;

pub use context::*;
pub use error::*;
pub use handler::*;
pub use server::*;

pub use http_type::*;

pub(crate) use config::*;
pub(crate) use middleware::*;
pub(crate) use route::*;

pub(crate) use core::hash::BuildHasherDefault;
pub(crate) use std::{
    collections::HashMap,
    error::Error as StdError,
    fmt::{self, Display},
    future::Future,
    net::SocketAddr,
    panic::{PanicHookInfo, set_hook},
    pin::Pin,
    sync::Arc,
    time::Duration,
};

pub(crate) use lombok_macros::*;
pub(crate) use serde::de::DeserializeOwned;
pub(crate) use tokio::{
    net::TcpListener,
    sync::{RwLockReadGuard, RwLockWriteGuard},
    task::yield_now,
};
```
