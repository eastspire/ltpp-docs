---
title: 响应时间测试
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - speed
  - request
  - time
order: 2
---

<Share colorful />

[GITHUB 地址](https://github.com/eastspire/test-request)

> [!tip]
> 测试累计请求 `1w` 次

| 场景      | http-request 平均耗时 | hyper 平均耗时 |
| --------- | --------------------- | -------------- |
| TCP 失败  | 39us                  | 78us           |
| hyperlane | 100us                 | 150us          |
| 阿帕奇    | 300us                 | 2500us         |

<Bottom />
