---
title: 日志
index: true
icon: book
category:
  - clone
  - web
  - rust
  - init-config
  - config
  - log
order: 6
---

### 设置日志存储路径

> [!tip]
>
> `hyperlane` 框架默认当前路径`logs`文件夹

```rust
// 省略 server 创建
server.log_dir("./logs").await;
```

### 设置日志单文件大小

> [!tip]
>
> `hyperlane` 框架文件大小的单位是字节（byte），默认 `1GB`

```rust
// 省略 server 创建
server.log_size(100_024_000).await;
```

### 设置日志写入文件间隔时间

> [!tip]
>
> `hyperlane` 框架写入日志文件间隔时间的单位是毫秒（ms） ，默认 `360MS`

```rust
// 省略 server 创建
server.log_interval_millis(1000).await;
```
