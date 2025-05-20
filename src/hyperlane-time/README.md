---
title: hyperlane时间库
index: true
icon: book
category:
  - hyperlane
  - time
  - rust
dir:
  order: 29
---

<Share colorful />

[GITHUB 地址](https://github.com/eastspire/hyperlane-time)

<center>

[![](https://img.shields.io/crates/v/hyperlane-time.svg)](https://crates.io/crates/hyperlane-time)
[![](https://img.shields.io/crates/d/hyperlane-time.svg)](https://img.shields.io/crates/d/hyperlane-time.svg)
[![](https://docs.rs/hyperlane-time/badge.svg)](https://docs.rs/hyperlane-time)  
[![](https://github.com/eastspire/hyperlane-time/workflows/Rust/badge.svg)](https://github.com/eastspire/hyperlane-time/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/hyperlane-time.svg)](./LICENSE)

</center>

[API 文档](https://docs.rs/hyperlane-time/latest/hyperlane_time/)

> 一个根据系统的本地设置获取当前时间的库。

## 安装

要使用这个库，你可以运行以下命令：

```shell
cargo add hyperlane-time
```

## 使用

```rust
use hyperlane_time::*;

println!("Current Time: {}", time());
println!("Current Date: {}", date());
println!("GMT Date: {}", gmt());
println!("Timestamp (s): {}", timestamp());
println!("Timestamp (ms): {}", timestamp_millis());
println!("Timestamp (μs): {}", timestamp_micros());
println!("Current Year: {}", year());
println!("Current Month: {}", month());
println!("Current Day: {}", day());
println!("Current Hour: {}", hour());
println!("Current Minute: {}", minute());
println!("Current Second: {}", second());
println!("Current Millis: {}", millis());
println!("Current Micros: {}", micros());
println!("Is Leap Year (1949): {}", is_leap_year(1949));
println!("Calculate Current Time: {:?}", calculate_time());
println!("Compute Date (10000 days): {:?}", compute_date(10000));
println!("Current Time with Millis: {}", time_millis());
println!("Current Time with Micros: {}", time_micros());
```

## 许可证

本项目使用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系

如有任何问题，请通过邮件联系作者 [root@ltpp.vip](mailto:root@ltpp.vip)。

<Bottom />
