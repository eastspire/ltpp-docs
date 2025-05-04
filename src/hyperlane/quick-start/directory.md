---
title: 目录结构
index: true
icon: book
category:
  - hyperlane
  - web
  - rust
  - quick-start
order: 1
---

<Share colorful />

> [!tip]
>
> 基于 `hyperlane` 设计的目录结构，配置和业务分离，扩展以插件形式存在，便于开发和维护

```txt
src                      # 项目代码目录
├── app                  # app目录
│   ├── controller       # 接口控制层
│   ├── dao              # 数据访问对象层
│   ├── domain           # 数据表对象层
│   ├── middleware       # 中间件层
│   ├── service          # 业务逻辑层
│   ├── utils            # 工具层
│   ├── view             # 视图层
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
