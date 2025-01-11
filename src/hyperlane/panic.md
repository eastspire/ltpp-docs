---
title: panic
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
---

> [!tip]
> hyperlane 对于用户线程 `panic` 会进行捕获并写入错误日志
> 需注意对于一个请求如果在任一中间件环节触发 `panic` 后续注册的路由处理函数将不会执行

## 代码示例

```rust
// 省略 server 创建
server.router("/", |_controller_data| {
    panic!("test panic");
});
```

## 日志示例

```rust
2025-01-04 11:26:29: test panic
```

<Bottom />
