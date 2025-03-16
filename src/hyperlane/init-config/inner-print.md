---
title: 框架内部输出
index: true
icon: book
category:
  - clone
  - web
  - rust
  - init-config
  - config
  - inner-print
order: 5
---

<Share colorful />

> [!tip]
>
> `hyperlane` 框架内部会对 `panic` 进行输出，默认会启用，此配置不影响用户代码里的输出。

### 开启框架内部输出

#### enable_inner_print

```rust
server.enable_inner_print();
```

#### print

```rust
server.inner_print(true);
```

### 关闭框架内部输出

#### disable_inner_print

```rust
server.disable_inner_print().await;
```

#### print

```rust
server.inner_print(false).await;
```

<Bottom />
