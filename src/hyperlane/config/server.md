---
title: 创建 Server
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - config
  - server
order: 2
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架创建服务方式如下，需要调用 `run` 方法，服务才会正常运行。

```rust
let server: Server = Server::new();
server.run().await.unwrap();
```

<Bottom />
