---
title: 错误处理
index: true
icon: book
category:
  - clone
  - web
  - rust
  - config
  - error-handle
order: 5
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架内部会对 `panic` 进行捕获，用户可通过钩子进行设置（不设置，框架会默认会输出错误信息）。

```rust
server.error_handler(|err: String| {
    // do something
});
```

<Bottom />
