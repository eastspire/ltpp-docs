---
title: Rust开发规范
index: true
icon: book
category:
  - development-standards
  - rust
dir:
  order: 1
---

<Share colorful />

<center>

## 变量命名

- 变量名使用蛇形命名法
- 常量名使用全大写字母，单词之间用下划线分隔
- 函数名使用蛇形命名法
- 结构体名使用大驼峰命名法
- 枚举名使用大驼峰命名法
- 模块名使用蛇形命名法
- 宏名使用蛇形命名法

## 包规范

- `lib` 项目包在根 `crate` 导入依赖，子模块引入根 `crate`
- `bin` 项目包在各自 `mod` 导入依赖

## lock 规范

- `lib` 项目不需要上传 `lock` 文件
- `bin` 项目需要上传 `lock` 文件

## monorepo 规范

- 需要尽可能拆分子 `crate`

## 目录规范

- 目录名根据功能划分，例如 `utils` 等
- 目录下文件名根据关键字划分，例如 `fn.rs, const.rs, struct.rs, enum.rs` 等
