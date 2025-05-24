---
title: Time To Live
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - config
  - ttl
order: 15
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架支持配置 `ttl`，该选项基于 `Tokio` 的 `TcpStream::set_ttl`，用于控制 `IP_TTL` 选项，以设置传输数据包的生存时间（`Time To Live`），从而影响数据包在网络中的跳数限制。

### 设置 `ttl`

```rust
// 省略 server 创建
server.set_ttl(128).await;
```

<Bottom />
