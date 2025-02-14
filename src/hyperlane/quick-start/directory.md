---
title: 目录结构
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
order: 1
---

```txt
src                      # 项目代码目录
├── app                  # app目录
│   ├── controller       # 控制器
│   ├── middleware       # 中间件
├── config               # 配置目录
│   ├── host             # host 配置
│   ├── port             # 端口配置
│   ├── log              # 日志配置
│   ├── plugin           # 插件配置
│   ├── middleware       # 中间件注册配置
│   ├── route            # 路由注册配置
|   ├── process          # 进程配置
│   ├── server           # 服务配置
├── plugin               # 插件目录
│   ├── logo_img         # 服务logo插件
│   ├── server_manager   # 服务进程管理插件
├── init                 # 初始化目录
│   ├── server           # 服务初始化
static                   # 静态资源目录
└── img                  # 图片静态资源
```

<Bottom />
