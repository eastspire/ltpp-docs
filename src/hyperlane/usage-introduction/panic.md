---
title: 恐慌
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - usage-introduction
  - panic
order: 11
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架对于用户线程 `panic` 会进行捕获并写入错误日志
> 需注意对于一个请求如果在任一中间件环节触发 `panic` 当前请求的后续注册的路由处理函数将不会执行

### 代码示例

```rust
// 省略 server 创建
server.route("/", |_ctx| {
    panic!("test panic");
});
```

### 日志示例

```rust
2025-01-04 11:26:29: test panic
```

<Bottom />
