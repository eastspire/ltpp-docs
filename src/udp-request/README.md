---
title: UDP请求库
index: true
icon: book
category:
  - udp-request
  - request
  - rust
dir:
  order: 40
---

<Share colorful />

[GITHUB 地址](https://github.com/ltpp-universe/udp-request)

<center>

[![](https://img.shields.io/crates/v/udp-request.svg)](https://crates.io/crates/udp-request)
[![](https://img.shields.io/crates/d/udp-request.svg)](https://img.shields.io/crates/d/udp-request.svg)
[![](https://docs.rs/udp-request/badge.svg)](https://docs.rs/udp-request)
[![](https://github.com/ltpp-universe/udp-request/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/udp-request/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/udp-request.svg)](./LICENSE)

</center>

[API 文档](https://docs.rs/udp-request/latest/tcp_request/)

> 一个简单的 UDP 请求库，用于在 Rust 应用程序中发送和接收 UDP 数据包，设计用于处理网络通信。

## 安装

要使用这个库，你可以运行以下命令：

```shell
cargo add udp-request
```

## 使用

#### 接收文本

```rs
use udp_request::*;

let mut request_builder = RequestBuilder::new()
    .host("127.0.0.1")
    .port(80)
    .build();
request_builder
    .send("udp send".as_bytes())
    .and_then(|response| {
        println!("ResponseTrait => {:?}", response.text());
        Ok(())
    })
    .unwrap_or_else(|e| println!("Error => {:?}", e));
```

#### 接收二进制

```rs
use udp_request::*;

let mut request_builder = RequestBuilder::new()
    .host("127.0.0.1")
    .port(80)
    .build();
request_builder
    .send("udp send".as_bytes())
    .and_then(|response| {
        println!("ResponseTrait => {:?}", response.binary());
        Ok(())
    })
    .unwrap_or_else(|e| println!("Error => {:?}", e));
```

## 许可证

本项目基于 MIT 许可证授权。详情请查看 [LICENSE](LICENSE) 文件。

## 贡献指南

欢迎贡献代码！请提交 Issue 或 Pull Request。

## 联系方式

如有任何疑问，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
