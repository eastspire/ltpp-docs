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

[GITHUB 地址](https://github.com/ltpp-universe/hyperlane-time)

<center>

[![](https://img.shields.io/crates/v/hyperlane-time.svg)](https://crates.io/crates/hyperlane-time)
[![](https://img.shields.io/crates/d/hyperlane-time.svg)](https://img.shields.io/crates/d/hyperlane-time.svg)
[![](https://docs.rs/hyperlane-time/badge.svg)](https://docs.rs/hyperlane-time)  
[![](https://github.com/ltpp-universe/hyperlane-time/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/hyperlane-time/actions?query=workflow:Rust)
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

println!("Current Time: {}", current_time());
println!("Current Date: {}", current_date());
println!("GMT Date: {}", current_date_gmt());
println!("Timestamp (ms): {}", current_timestamp_millis());
println!("Timestamp (μs): {}", current_timestamp_micros());
println!("Current Year: {}", current_year());
println!("Current Month: {}", current_month());
println!("Current Day: {}", current_day());
println!("Current Hour: {}", current_hour());
println!("Current Minute: {}", current_minute());
println!("Current Second: {}", current_second());
println!("Is Leap Year (1949): {}", is_leap_year(1949));
println!("Calculate Current Date: {:?}", calculate_current_date());
println!("Compute Date (10000 days): {:?}", compute_date(10000));
println!("Current Time with Millis: {}", current_time_with_millis());
println!("Current Time with Micros: {}", current_time_with_micros());
println!("Calculate Date with Millis: {:?}", calculate_current_date_with_millis());
println!("Calculate Date with Micros: {:?}", calculate_current_date_with_micros());
```

## 许可证

本项目使用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请提交问题或拉取请求。

## 联系

如有任何问题，请通过邮件联系作者 [ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
