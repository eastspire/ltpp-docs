---
title: HTTP请求库
index: true
icon: book
category:
  - http-request
  - request
  - rust
dir:
  order: 20
---

[GITHUB 地址](https://github.com/ltpp-universe/http-request)

<Share colorful />
<Catalog />

[![](https://img.shields.io/crates/v/http-request.svg)](https://crates.io/crates/http-request)<br>
[![](https://docs.rs/http-request/badge.svg)](https://docs.rs/http-request)<br>
[![](https://img.shields.io/crates/l/http-request.svg)](./license)<br>
[![](https://github.com/ltpp-universe/http-request/workflows/Rust/badge.svg)](https://github.com/ltpp-universe/http-request/actions?query=workflow:Rust)

[接口文档](https://docs.rs/http-request/latest/http_request/)

## 说明

> [!tip]
> http-request 是一个轻量级、高效的库，用于在 Rust 应用程序中构建、发送和处理 HTTP/HTTPS 请求。它提供了一个简单直观的 API，使开发人员可以轻松地与使用 "HTTP" 或 "HTTPS" 协议的 Web 服务进行交互。该库支持各种 HTTP 方法、定制的请求头、请求体、超时、自动处理重定向（包括检测重定向循环）以及增强的响应体解码（包括自动和手动解码），从而实现快速和安全的通信。无论是处理安全的 "HTTPS" 连接，还是标准的 "HTTP" 请求，该库都针对性能、资源使用最小化以及与 Rust 项目的轻松集成进行了优化。

## 特性

- **支持 HTTP/HTTPS**：支持 HTTP 和 HTTPS 协议。
- **轻量设计**：`http_request` crate 提供了一个简单高效的 API，用于构建、发送和处理 HTTP 请求，同时最小化资源消耗。
- **支持常见 HTTP 方法**：支持常见的 HTTP 方法，如 GET 和 POST。
- **灵活的请求构建**：通过 `RequestBuilder` 提供丰富的配置选项，可以设置请求头、请求体和 URL。
- **简单的错误处理**：利用 `Result` 类型处理请求和响应中的错误，使错误处理变得简单。
- **自定义请求头和请求体**：轻松添加自定义的请求头和请求体。
- **响应处理**：提供一个简单的包装器来处理 HTTP 响应，使得访问和处理响应数据变得更加容易。
- **优化的内存管理**：实现了高效的内存管理，最大程度地减少不必要的内存分配，提高性能。
- **重定向处理**：支持重定向处理，可以设置最大重定向次数，并包括重定向循环检测。
- **超时**：支持超时功能。
- **自动和手动响应体解码**：支持自动和手动解码响应体，允许与不同内容类型（如 JSON、XML 等）进行无缝交互。

## 安装

要使用该库，可以运行以下命令：

```shell
cargo add http-request
```

## 示例

### 发送 `GET` 请求

```rs
use http_request::*;
use std::collections::HashMap;
let mut header: HashMap<&str, &str> = HashMap::new();
header.insert("header-key", "header-value");
let mut _request_builder = RequestBuilder::new()
    .get("https://ltpp.vip/")
    .headers(header)
    .timeout(6000)
    .redirect()
    .max_redirect_times(8)
    .http1_1_only()
    .buffer(4096)
    .decode()
    .build();
_request_builder
    .send()
    .and_then(|response| {
        println!("{:?}", response.text());
        Ok(())
    })
    .unwrap_or_else(|e| println!("Error => {}", e));
```

### 发送 `POST` 请求

#### 发送 `JSON` 文本请求体

```rs
use http_request::*;
use std::collections::HashMap;
let mut header: HashMap<&str, &str> = HashMap::new();
header.insert("header-key", "header-value");
let mut body: HashMap<&str, &str> = HashMap::new();
body.insert("body-key", "body-value");
let mut _request_builder = RequestBuilder::new()
    .post("http://localhost:80")
    .json(body)
    .headers(header)
    .timeout(6000)
    .redirect()
    .max_redirect_times(8)
    .http1_1_only()
    .buffer(4096)
    .build();
_request_builder
    .send()
    .and_then(|response| {
        println!("{:?}", response.decode().text());
        Ok(())
    })
    .unwrap_or_else(|e| println!("Error => {}", e));
```

#### 发送 `自定义文本` 请求体

```rs
use http_request::*;
use std::collections::HashMap;
let mut header: HashMap<&str, &str> = HashMap::new();
header.insert("header-key", "header-value");
let mut _request_builder = RequestBuilder::new()
    .post("http://localhost")
    .text("hello")
    .headers(header)
    .timeout(6000)
    .redirect()
    .max_redirect_times(8)
    .http1_1_only()
    .buffer(4096)
    .decode()
    .build();
_request_builder
    .send()
    .and_then(|response| {
        println!("{:?}", response.text());
        Ok(())
    })
    .unwrap_or_else(|e| println!("Error => {}", e));
```

#### 发送 `二进制` 请求体

```rs
use http_request::*;
use std::collections::HashMap;
let mut header: HashMap<&str, &str> = HashMap::new();
header.insert("header-key", "header-value");
let mut _request_builder = RequestBuilder::new()
    .post("http://localhost")
    .body("hello".as_bytes())
    .headers(header)
    .timeout(6000)
    .redirect()
    .max_redirect_times(8)
    .http1_1_only()
    .buffer(4096)
    .build();
_request_builder
    .send()
    .and_then(|response| {
        println!("{:?}", response.decode(4096).text());
        Ok(())
    })
    .unwrap_or_else(|e| println!("Error => {}", e));
```

## 帮助

确保系统上已安装 CMake。

## 许可证

该项目采用 MIT 许可证。有关详情，请查看 [license](license) 文件。

## 贡献

欢迎贡献代码！请提交 Issue 或发起 Pull Request。

## 联系方式

如有任何疑问，请联系作者：[ltpp-universe <root@ltpp.vip>](mailto:root@ltpp.vip)。

<Bottom />
