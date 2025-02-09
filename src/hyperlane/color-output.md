---
title: 颜色输出
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 14
---

> [!tip]
> hyperlane 颜色输出使用了 `color-output` 库，框架已默认导入，无需额外安装和导入
> 使用参考 [官方文档](../color-output/README.md)

## 框架提供基于 `color-output` 库二次封装的宏

> 使用方式一样，支持变长入参，将需要输出的信息作为参数传入即可，宏内部调用`color-output` 库，注意入参需要实现 ToString trait

### print_success!

> 不换行输出成功信息

```rust
print_success!("1234", "5678");
```

### print_warning!

> 不换行输出警告信息

```rust
print_warning!("1234", "5678");
```

### print_danger!

> 不换行输出危险信息

```rust
print_danger!("1234", "5678");
```

### println_success!

> 换行输出成功信息

```rust
println_success!("1234", "5678");
```

### println_warning!

> 换行输出警告信息

```rust
println_warning!("1234", "5678");
```

### println_danger!

> 换行输出危险信息

```rust
println_danger!("1234", "5678");
```

<Bottom />
