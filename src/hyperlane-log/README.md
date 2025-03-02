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

> 一款 Rust 异步日志库，运行在专用线程中，以避免阻塞其他线程。支持多种日志级别（如错误、信息、调试），并允许自定义日志处理方法和配置日志文件路径，单个日志达到限定大小会自动创建新的日志文件。

## 安装

要使用此库，您可以运行以下命令：

```shell
cargo add hyperlane-log
```

## 日志存储位置说明

> 会在用户指定的目录下生成三个目录，分别对应错误日志目录，信息日志目录，调试日志目录，这三个目录下还有一级目录使用日期命名，此目录下的日志文件命名是时间.下标.log

## 使用

```rust
use hyperlane_log::*;
let log: Log = Log::new("./logs", 1_024_000, 360);
let log_thread: JoinHandle<()> = log_run(&log);
log.error("error data!", |error| {
    let write_data: String = format!("User error func =>  {:?}\n", error);
    write_data
});
log.info("info data!", |info| {
    let write_data: String = format!("User info func =>  {:?}\n", info);
    write_data
});
log.debug("debug data!", |debug| {
    let write_data: String = format!("User debug func =>  {:#?}\n", debug);
    write_data
});
let _ = log_thread.join();
```

## 许可证

该项目采用 MIT 许可证。详细信息请参阅 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系方式

如有任何问题，请通过 [ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip) 联系作者。

<Bottom />
