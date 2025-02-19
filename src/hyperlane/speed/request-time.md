---
title: 响应时间测试
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 1
---

[GITHUB 地址](https://github.com/ltpp-universe/test-request)

> 服务端（本地） 8 线程，客户端（本地）请求 1w 次

| 场景      | http-request 平均耗时 | hyper 平均耗时 |
| --------- | --------------------- | -------------- |
| TCP 失败  | 39us                  | 78us           |
| hyperlane | 100us                 | 150us          |
| 阿帕奇    | 300us                 | 2500us         |

<Bottom />
