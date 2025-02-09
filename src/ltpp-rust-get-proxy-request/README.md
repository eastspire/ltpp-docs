---
title: LTPP-GET请求代理POST请求
index: true
icon: book
category:
  - LTPP-GET请求代理POST请求文档
  - GET
  - POST
  - 代理
dir:
  order: 8
---

<Share colorful />
<Catalog />

[GITHUB 地址](https://github.com/ltpp-universe/rust-get-proxy-request)

## 简介

> [!tip]
> 基于`tokio`框架开发，`lazy_static`库用于全局变量存储，`reqwest`库用于发送请求

## 功能

- 支持 `GET` 请求实现 `POST` 效果
- 支持`日志`
- 命令行参数读取
- 支持请求地址，请求头，请求参数，响应头设置

## 运行

> [!tip]
> 命令行参数含义分别为监听端口和日志路径（本项目未使用配置文件原因是此项目定位是通过命令即可立即运行，实现基本功能）

- 默认监听端口：80
- 默认日志路径：程序运行时目录下的 `logs` 文件夹内

### 使用协议

> [!tip]
> 参数 `url`（URL 编码后的 POST 请求地址）

- 例如`https://ltpp.vip` 编码后为 `https%3A%2F%2Fltpp.vip`，请求参数为 `url=https%3A%2F%2Fltpp.vip`

> [!tip]
> 参数 `request_header`（URL 编码后的 POST 请求的请求头）：使用&拼接每个请求头，每个请求头 key 和 value 使用=连接，将整个部分进行 URL 编码

- 例如 `Referer=https://ltpp.vip&Pragma=no-cache` 编码后为 `Referer%3Dhttps%3A%2F%2Fltpp.vip%26Pragma%3Dno-cache`，请求参数为 `request_header=Referer%3Dhttps%3A%2F%2Fltpp.vip%26Pragma%3Dno-cache`

> [!tip]
> 参数 `data`（URL 编码后的 POST 请求的数据）：使用&拼接每个数据，每个数据 key 和 value 使用=连接，将整个部分进行 URL 编码（如果 data 字段不存在或者为空，则使用 GET 请求目标地址，如果希望使用 POST 请求，务必携带此参数）

- 例如 `name=ltpp&password=ltpp` 编码后为 `name%3Dltpp%26password%3Dltpp`，请求参数为 `data=name%3Dltpp%26password%3Dltpp`

> [!tip]
> 参数 `response_header`（URL 编码后的 POST 请求额外的响应头）：使用&拼接每个响应头，每个响应头 key 和 value 使用=连接，将整个部分进行 URL 编码， 如果用户设置响应头和 POST 请求的响应头冲突，则以用户设置的响应头为最终结果

- 例如 `Content-Encoding=br&Server=LTPP` 编码后为 `Content-Encoding%3Dbr%26Server%3DLTPP`，请求参数为 `response_header=Content-Encoding%3Dbr%26Server%3DLTPP`

> [!tip]
> 参数 `original`（是否使用透传 POST 请求结果）：数值存在即使用透传

- 例如参数 `original=1` 即表示透传，`original` 不设置数值即表示不透传，使用系统定义的数据结构，如下：

```rust
pub struct Response {
    pub status: u16,
    pub url: String,
    pub request_header: HashMap<String, String>,
    pub response: String,
    pub response_header: HashMap<String, String>,
    pub time: String,
}
```

<Bottom />
