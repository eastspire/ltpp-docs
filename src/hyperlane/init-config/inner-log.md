---
title: 框架内部日志
index: true
icon: book
category:
  - clone
  - web
  - rust
  - init-config
  - config
  - inner-log
order: 6
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架内部会对 `panic` 进行日志记录，默认会启用，此配置不影响用户代码里的日志记录。

### 开启框架内部日志记录

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

<Bottom />
