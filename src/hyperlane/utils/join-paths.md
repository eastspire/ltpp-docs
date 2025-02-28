---
title: 路径合并
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 3
---

### 路径合并

> [!tip]
>
> `hyperlane` 框架提供了 `join_paths!` 宏用于将多个路径组合成一个有效的路径，并处理重叠的斜杠
> 此宏来自`std-macro-extensions`库，使用参考 [官方文档](../../std-macro-extensions/README.md)

#### 参数

- 若干待合并的路径

#### 返回值

- `String`: 合并后的路径

#### 使用

```rust
let combined_path: String = join_paths!("/home/", "/user/", "/documents", "file.txt");
let another_path: String = join_paths!("C:/", "/Program Files", "App");
```

<Bottom />
