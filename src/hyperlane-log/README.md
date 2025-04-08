---
title: hyperlane日志库
index: true
icon: book
category:
  - hyperlane
  - log
  - rust
dir:
  order: 28
---

<Share colorful />

[GITHUB 地址](https://github.com/ltpp-universe/hyperlane-log)

<center>

[![](https://img.shields.io/crates/v/hyperlane-log.svg)](https://crates.io/crates/hyperlane-log)
[![](https://img.shields.io/crates/d/hyperlane-log.svg)](https://img.shields.io/crates/d/hyperlane-log.svg)
[![](https://docs.rs/hyperlane-log/badge.svg)](https://docs.rs/hyperlane-log)
[![](https://github.com/ltpp-universe/hyperlane-log/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/hyperlane-log/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/hyperlane-log.svg)](./LICENSE)

</center>

[API 文档](https://docs.rs/hyperlane-log/latest/hyperlane_log/)

> 一个支持异步和同步日志的 Rust 日志库。它提供了多种日志级别，如错误、信息和调试。用户可以定义自定义日志处理方法并配置日志文件路径。该库支持日志轮换，当当前文件达到指定的大小限制时，会自动创建一个新的日志文件。它允许灵活的日志记录配置，使其既适用于高性能异步应用程序，也适用于传统的同步日志记录场景。异步模式使用 Tokio 的异步通道进行高效的日志缓冲，而同步模式则将日志直接写入文件系统。

## 安装

要使用此库，您可以运行以下命令：

```shell
cargo add hyperlane-log
```

## 日志存储位置说明

> 会在用户指定的目录下生成三个目录，分别对应错误日志目录，信息日志目录，调试日志目录，这三个目录下还有一级目录使用日期命名，此目录下的日志文件命名是时间.下标.log

## 使用同步

```rust
use hyperlane_log::*;
let log: Log = Log::new("./logs", 1_024_000);
log.error("error data!", |error| {
    let write_data: String = format!("User error func =>  {:?}\n", error);
    write_data
});
log.error(String::from("error data!"), |error| {
    let write_data: String = format!("User error func =>  {:?}\n", error);
    write_data
});
log.info("info data!", |info| {
    let write_data: String = format!("User info func =>  {:?}\n", info);
    write_data
});
log.info(String::from("info data!"), |info| {
    let write_data: String = format!("User info func =>  {:?}\n", info);
    write_data
});
log.debug("debug data!", |debug| {
    let write_data: String = format!("User debug func =>  {:#?}\n", debug);
    write_data
});
log.debug(String::from("debug data!"), |debug| {
    let write_data: String = format!("User debug func =>  {:#?}\n", debug);
    write_data
});
```

## 使用异步

```rust
use hyperlane_log::*;
let log: Log = Log::new("./logs", 1_024_000);
log.async_error("async error data!", |error| {
    let write_data: String = format!("User error func =>  {:?}\n", error);
    write_data
}).await;
log.async_error(String::from("async error data!"), |error| {
    let write_data: String = format!("User error func =>  {:?}\n", error);
    write_data
}).await;
log.async_info("async info data!", |info| {
    let write_data: String = format!("User info func =>  {:?}\n", info);
    write_data
}).await;
log.async_info(String::from("async info data!"), |info| {
    let write_data: String = format!("User info func =>  {:?}\n", info);
    write_data
}).await;
log.async_debug("async debug data!", |debug| {
    let write_data: String = format!("User debug func =>  {:#?}\n", debug);
    write_data
}).await;
log.async_debug(String::from("async debug data!"), |debug| {
    let write_data: String = format!("User debug func =>  {:#?}\n", debug);
    write_data
}).await;
```

## 禁用日志

```rust
let log: Log = Log::new("./logs", DISABLE_LOG_FILE_SIZE);
```

## 许可证

该项目采用 MIT 许可证。详细信息请参阅 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系方式

如有任何问题，请通过 [ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip) 联系作者。

<Bottom />
