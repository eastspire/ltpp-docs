---
title: Hyperlane广播库
index: false
icon: book
category:
  - hyperlane-broadcast
dir:
  order: 44
---

<Share colorful />

[GITHUB 地址](https://github.com/eastspire/hyperlane-broadcast)

<center>

[![](https://img.shields.io/crates/v/hyperlane-broadcast.svg)](https://crates.io/crates/hyperlane-broadcast)
[![](https://img.shields.io/crates/d/hyperlane-broadcast.svg)](https://img.shields.io/crates/d/hyperlane-broadcast.svg)
[![](https://docs.rs/hyperlane-broadcast/badge.svg)](https://docs.rs/hyperlane-broadcast)
[![](https://github.com/eastspire/hyperlane-broadcast/workflows/Rust/badge.svg)](https://github.com/eastspire/hyperlane-broadcast/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/hyperlane_broadcast.svg)](./LICENSE)

</center>

[官方文档](https://docs.ltpp.vip/hyperlane-broadcast/)
[API 文档](https://docs.rs/hyperlane-broadcast/latest/hyperlane_broadcast/)

> hyperlane-broadcast 是一个基于 Tokio 广播通道的轻量级、符合人体工学的封装库，旨在为异步 Rust 应用提供简洁易用的发布-订阅消息机制。它在保留 Tokio 原始特性的同时，极大简化了广播使用流程，降低了使用门槛。

## 安装方式

你可以使用如下命令添加依赖：

```shell
cargo add hyperlane-broadcast
```

## 使用示例

```rust
use hyperlane_broadcast::*;

let broadcast: Broadcast<usize> = Broadcast::new(10);
let mut rec1: BroadcastReceiver<usize> = broadcast.subscribe();
let mut rec2: BroadcastReceiver<usize> = broadcast.subscribe();
broadcast.send(20).unwrap();
assert_eq!(rec1.recv().await, Ok(20));
assert_eq!(rec2.recv().await, Ok(20));

let broadcast_map: BroadcastMap<usize> = BroadcastMap::new();
broadcast_map.insert("a", 10);
let mut rec1: BroadcastMapReceiver<usize> = broadcast_map.subscribe("a").unwrap();
let mut rec2: BroadcastMapReceiver<usize> = broadcast_map.subscribe("a").unwrap();
let mut rec3: BroadcastMapReceiver<usize> = broadcast_map.subscribe_unwrap_or_insert("b");
broadcast_map.send("a", 20).unwrap();
broadcast_map.send("b", 10).unwrap();
assert_eq!(rec1.recv().await, Ok(20));
assert_eq!(rec2.recv().await, Ok(20));
assert_eq!(rec3.recv().await, Ok(10));
```

## 开源协议

本项目采用 [MIT 许可证](LICENSE)。

## 贡献指南

我们欢迎任何形式的贡献！如有建议或想法，请通过 issue 或 pull request 提交。

## 联系方式

如有任何问题，欢迎联系作者：[root@ltpp.vip](mailto:root@ltpp.vip)

<Bottom />
