---
title: HTTP行缓冲区
index: true
icon: book
category:
  - clone
  - web
  - rust
  - init-config
  - config
  - log
order: 8
---

<Share colorful />

## 设置 `HTTP` 行缓冲区大小

> [!tip]
>
> `hyperlane` 框架设置 `HTTP` 行缓冲区大小方式如下
> 不设置或者设置为 `0` 则默认是 `4096` 字节

```rust
server.http_line_buffer_size(4096).await;
```
