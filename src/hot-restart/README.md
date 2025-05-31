---
title: 热重启
index: false
icon: book
category:
  - hot-restart
dir:
  order: 47
---

<Share colorful />

[GITHUB 地址](https://github.com/eastspire/hot-restart)

<center>

[![](https://img.shields.io/crates/v/hot-restart.svg)](https://crates.io/crates/hot-restart)
[![](https://img.shields.io/crates/d/hot-restart.svg)](https://img.shields.io/crates/d/hot-restart.svg)
[![](https://docs.rs/hot-restart/badge.svg)](https://docs.rs/hot-restart)
[![](https://github.com/eastspire/hot-restart/workflows/Rust/badge.svg)](https://github.com/eastspire/hot-restart/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/hot-restart.svg)](./LICENSE)

</center>

[官方文档](https://docs.ltpp.vip/hot-restart/)

[API 文档](https://docs.rs/hot-restart/latest/hot_restart/)

> 一个热重启的 lib 项目

## 安装

使用以下命令添加此依赖：

```shell
cargo add hot-restart
```

## 使用示例

```rust
use hot_restart::*;

let res: ResultHotRestartError = hot_restart(&["--once", "-x", "check", "-x", "build --release"]);
println!("hot_restart {:?}", res);
```

## 许可证

本项目使用 MIT 协议，详情请参见 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献代码！请提交 issue 或 pull request。

## 联系方式

如有任何问题，请联系作者 [root@ltpp.vip](mailto:root@ltpp.vip)。

<Bottom />
