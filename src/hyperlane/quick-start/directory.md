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
> 基于 `hyperlane` 设计的目录结构，配置和业务分离，扩展以插件形式存在，便于开发和维护。

```txt
├── app                      # app目录
│   ├── aspect               # 切面编程层
│   ├── controller           # 接口控制层
│   ├── exception            # 异常处理层
│   ├── filter               # 过滤器层
│   ├── mapper               # 数据访问层
│   ├── middleware           # 中间件层
│   ├── model                # 数据模型层
│      ├── application       # 应用对象
│      ├── bean              # 实体对象
│      ├── business          # 业务对象
│      ├── data              # 数据对象
│      ├── data_access       # 数据访问对象
│      ├── data_transfer     # 数据传输对象
│      ├── domain            # 领域对象
│      ├── param             # 参数对象
│      ├── persistent        # 持久化对象
│      ├── view              # 视图对象
│   ├── service              # 业务逻辑层
│   ├── utils                # 工具层
│   ├── view                 # 视图层
├── config                   # 配置目录
│   ├── business             # 业务配置
│   ├── infrastructure       # 基础设施配置
│      ├── hyperlane         # Hyperlane配置
│      ├── server_manager    # 服务管理配置
├── init                     # 初始化目录
│   ├── infrastructure       # 基础设施初始化
│      ├── hyperlane         # Hyperlane始化
├── plugin                   # 插件目录
│   ├── log                  # 日志插件
│   ├── server_manager       # 服务进程管理插件
├── resources                # 资源目录
│   ├── static               # 静态资源目录
│      ├── html              # HTML静态资源
│      ├── img               # 图片静态资源
│   ├── templates            # 模板目录
│      ├── html              # HTML模板
```

**Model 介绍**

| 目录名          | 中文名       | 典型职责                                             | 使用场景举例                                        | 与其它层关系                               |
| --------------- | ------------ | ---------------------------------------------------- | --------------------------------------------------- | ------------------------------------------ |
| `application`   | 应用对象     | 编排多个业务对象，处理用户用例                       | 服务层 `UserService` 聚合多个 `UserBO` 处理注册流程 | 调用 `business`，传递 `param`、返回 `view` |
| `bean`          | 实体对象     | 数据实体，表现为 Struct 或 ORM 实体                  | `UserEntity`、`ArticleEntity`，保存于数据库         | 被 `persistent` 持久化，供 `domain` 使用   |
| `business`      | 业务对象     | 封装核心业务逻辑（BO）                               | `UserBO::register` 内部逻辑完整，不依赖框架         | 被 `application` 调用                      |
| `data`          | 数据对象     | 数据结构本身，不带行为（值对象、常量等）             | `GenderEnum`、`IdVO`、`DateRange`                   | 被 `domain` 和 `dto` 等层使用              |
| `data_access`   | 数据访问对象 | 封装数据库交互（DAO、Repository）                    | `UserRepository::find_by_email()`                   | 操作 `bean` 或 `persistent`                |
| `data_transfer` | 数据传输对象 | 接口中传输的数据载体，常用于请求响应、分页、统一结构 | `ApiResponse<T>`、`Page<T>`、`UserDto`              | 被 controller、OpenAPI 文档广泛使用        |
| `param`         | 参数对象     | 接口入参、查询条件、分页等                           | `LoginParam`、`SearchQueryParam`                    | 传入 `application` 层                      |
| `persistent`    | 持久化对象   | ORM 映射专用结构体，有时带属性注解                   | `UserPersistent` 映射数据库字段                     | 与 `bean` 相似，偏向实现层                 |
| `domain`        | 领域对象     | 领域模型（实体和值对象），封装行为                   | `OrderAggregate`，可带行为如 `Order::cancel()`      | 被 `business` 聚合使用                     |
| `view`          | 视图对象     | 接口输出结果的表现结构，适配前端需求                 | `UserProfileView`、`ArticleDetailView`              | 从 `dto` 或 `bean` 转换而来                |

```txt
                    +-------------------+
                    |   controller      |
                    +-------------------+
                             |
                             v
                       [param 对象]
                             |
                             v
+---------+        +--------------------+       +-----------+
|  view   | <---   |  application 层    |  ---> | response  |
+---------+        +--------------------+       +-----------+
       ^                |           ^
       |                v           |
+--------------+    +---------+     |
| data_transfer |<--| business|<----+
+--------------+    +---------+     |
       |                            |
       v                            v
   +--------+                +-------------+
   | domain | <------------> |  data_access|
   +--------+                +-------------+
       ^                            |
       |                            v
   +---------+               +-------------+
   |  data   |               | persistent  |
   +---------+               +-------------+
```

<Bottom />
