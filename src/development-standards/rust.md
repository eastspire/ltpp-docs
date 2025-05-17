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

- `lib` 项目包在根模块导入依赖，子模块引入跟模块
- `bin` 项目包在各自模块引入依赖

## lock 规范

- `lib` 项目不需要上传 `lock` 文件
- `bin` 项目需要上传 `lock` 文件
