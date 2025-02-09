---
title: TCP请求库
index: true
icon: book
category:
  - tcp-request
  - request
  - rust
dir:
  order: 31
---

<Share colorful />
<Catalog />

[GITHUB 地址](https://github.com/ltpp-universe/tcp-request)

## tcp-request

<center>

[![](https://img.shields.io/crates/v/tcp-request.svg)](https://crates.io/crates/tcp-request)
[![](https://docs.rs/tcp-request/badge.svg)](https://docs.rs/tcp-request)
[![](https://github.com/ltpp-universe/tcp-request/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/tcp-request/actions?query=workflow:Rust)
[![](https://img.shields.io/crates/l/tcp-request.svg)](./LICENSE)

</center>

[API 文档](https://docs.rs/tcp-request/latest/tcp_request/)

> 一个 Rust 库，用于发送原始 TCP 请求，支持处理响应、管理重定向以及在 TCP 连接中处理压缩数据。

### 安装

通过以下命令安装该 crate：

```shell
cargo add tcp-request
```

### 使用方法

#### 发送文本数据

```rust
use tcp_request::*;
let mut request_builder = RequestBuilder::new()
    .host("127.0.0.1")
    .port(80)
    .set_data("tcp send".into())
    .build();
request_builder
    .send()
    .and_then(|response| {
        println!("ResponseTrait => {:?}", response.text());
        Ok(())
    })
    .unwrap_or_else(|e| println!("Error => {:?}", e));
```

#### 发送二进制数据

```rust
use tcp_request::*;
let mut request_builder = RequestBuilder::new()
    .host("127.0.0.1")
    .port(80)
    .set_data("tcp send".into())
    .build();
request_builder
    .send()
    .and_then(|response| {
        println!("ResponseTrait => {:?}", response.text());
        Ok(())
    })
    .unwrap_or_else(|e| println!("Error => {:?}", e));
```

### 注意事项

确保系统中已安装 CMake。

### 开源协议

此项目基于 MIT 协议开源，详细内容请参阅 [LICENSE](LICENSE)。

### 贡献

欢迎贡献！请提交 Issue 或 Pull Request。

### 联系方式

如有任何问题，请通过以下邮箱联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
