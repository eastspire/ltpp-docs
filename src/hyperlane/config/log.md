---
title: 日志
index: true
icon: book
category:
  - clone
  - web
  - rust
  - config
  - log
order: 6
---

<Share colorful />

### 设置日志存储路径

> [!tip]
>
> `hyperlane` 框架默认当前路径 `logs` 文件夹。

```rust
// 省略 server 创建
server.log_dir("./logs").await;
```

### 设置日志单文件大小

> [!tip]
>
> `hyperlane` 框架文件大小的单位是字节（byte），默认 `1GB`。

```rust
// 省略 server 创建
server.log_size(100_024_000).await;
```

### 设置日志写入文件间隔时间

> [!tip]
>
> `hyperlane` 框架写入日志文件间隔时间的单位是毫秒（ms） ，默认 `360MS`。

```rust
// 省略 server 创建
server.log_interval_millis(1000).await;
```

### 禁用所有日志记录

> [!tip]
>
> `hyperlane` 框架禁用日志记录原理是设置日志文件大小为 `DISABLE_LOG_FILE_SIZE`。

```rust
// 省略 server 创建
server.disable_log().await;
```

### 启用所有日志记录

> [!tip]
>
> `hyperlane` 框架框架默认会启用所有日志记录。

```rust
// 省略 server 创建
server.enable_log().await;
```

### 开启框架内部日志记录

> [!tip]
>
> `hyperlane` 框架内部会对 `panic` 进行日志记录，默认会启用，此配置不影响用户代码里的日志记录。

#### enable_inner_log

```rust
server.enable_inner_log();
```

#### log

```rust
server.inner_log(true);
```

### 关闭框架内部日志记录

#### disable_inner_log

```rust
server.disable_inner_log().await;
```

#### log

```rust
server.inner_log(false).await;
```
