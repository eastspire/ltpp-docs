---
title: 日志
index: true
icon: book
category:
  - clone
  - web
  - rust
order: 5
---

### 设置日志存储路径

> [!tip]
> 默认当前路径`logs`文件夹

```rust
// 省略 server 创建
server.log_dir("./logs").await;
```

### 设置日志单文件大小

> [!tip]
> 单位字节，默认 `1GB`

```rust
// 省略 server 创建
server.log_size(100_024_000).await;
```

### 设置日志写入文件间隔时间

> [!tip]
> 单位 `ms` ，默认 `360ms`

```rust
// 省略 server 创建
server.log_interval_millis(1000).await;
```
