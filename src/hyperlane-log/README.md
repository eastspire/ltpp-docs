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

[GITHUB 地址](https://github.com/ltpp-universe/hyperlane-log)

[LTPP-GIT 地址](https://git.ltpp.vip/root/hyperlane-log)

<Share colorful />
<Catalog />

[![](https://img.shields.io/crates/v/hyperlane-log.svg)](https://crates.io/crates/hyperlane-log)<br>
[![](https://docs.rs/hyperlane-log/badge.svg)](https://docs.rs/hyperlane-log)<br>
[![](https://img.shields.io/crates/l/hyperlane-log.svg)](./LICENSE)<br>
[![](https://github.com/ltpp-universe/hyperlane-log/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/hyperlane-log/actions?query=workflow:Rust)

[官方文档](https://docs.ltpp.vip/hyperlane-log/)

[API 文档](https://docs.rs/hyperlane-log/latest/hyperlane_log/)

> 一款 Rust 异步日志库，运行在专用线程中，以避免阻塞其他线程。支持多种日志级别（如错误、信息、调试），并允许自定义日志处理方法和配置日志文件路径。

## 特性

## 安装

要使用此库，您可以运行以下命令：

```shell
cargo add hyperlane-log
```

## 使用

```rust
use hyperlane_log::*;
let log: Log = Log::new("./logs", 1_024_000);
let log_thread: JoinHandle<()> = log_run(&log);
log.log_error("error data => ", |error| {
    let write_data: String = format!("User error func =>  {:?}\n", error);
    write_data
});
log.log_info("info data => ", |info| {
    let write_data: String = format!("User info func =>  {:?}\n", info);
    write_data
});
log.log_debug("debug data => ", |debug| {
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
