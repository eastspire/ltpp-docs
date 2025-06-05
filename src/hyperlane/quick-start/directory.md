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
│      ├── framework         # 框架配置
│      ├── server_manager    # 服务管理配置
├── init                     # 初始化目录
│   ├── business             # 业务初始化
│   ├── infrastructure       # 基础设施初始化
│      ├── framework         # 框架始化
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

## 🗂 各层级调用关系详解

### `app/controller`（接口控制层）

- 调用：

  - `service`：处理业务逻辑。
  - `model/param`：接收请求参数。
  - `model/view`：返回视图对象。
  - `model/data_transfer`：构建 DTO 返回。
  - `utils`：使用工具函数处理请求数据。
  - `exception`：统一异常抛出。
  - `filter` / `middleware`：作为请求链的入口或出口。
  - `aspect`：被 AOP 织入切面逻辑。
  - `view`：视图渲染。
  - `resources/templates`：页面模板渲染。
  - `resources/static`：静态资源引用。
  - `plugin/*`：调用日志记录、服务管理等插件。

### `app/service`（业务逻辑层）

- 调用：

  - `mapper`：访问数据库。
  - `model/business`：封装业务对象。
  - `model/domain`：应用领域建模。
  - `model/data_transfer`：服务返回值封装。
  - `exception`：业务异常处理。
  - `utils`：辅助计算、验证、转换等。
  - `plugin/*`：调用插件完成增强能力。

- 被调用：

  - `controller`

### `app/mapper`（数据访问层）

- 调用：

  - `model/data_access`：数据库表映射。
  - `model/persistent`：持久化结构体。
  - `utils`：SQL 构建等辅助操作。

- 被调用：

  - `service`

### `app/model/*`（数据模型层）

> 被多个模块依赖和使用，不主动调用其他层。

#### 常用子模块说明：

| 子模块          | 使用场景                                           |
| --------------- | -------------------------------------------------- |
| `application`   | 应用级上下文对象，用于 service/mapper 层组合数据。 |
| `bean`          | 通用实体定义，如 User、Order 等。                  |
| `business`      | 业务组合对象，如 OrderDetail + PaymentInfo。       |
| `data`          | 中间数据对象，在服务流程中传递状态。               |
| `data_access`   | 映射 DAO/ORM 结构，数据库字段。                    |
| `data_transfer` | DTO 层，controller → client 层数据输出。           |
| `domain`        | 领域建模，对应 DDD 的 Aggregate/Entity/VO。        |
| `param`         | controller 接收参数封装。                          |
| `persistent`    | 映射数据库存储模型。                               |
| `view`          | 用于最终渲染视图页面的模型。                       |

### `app/exception`（异常处理层）

- 被调用：

  - `controller`
  - `service`
  - `mapper`

### `app/filter`（过滤器层）

- 被调用：

  - `controller` 请求前过滤。

### `app/middleware`（中间件层）

- 被调用：

  - `controller` 请求或响应阶段增强，如权限校验、Header 注入等。

### `app/aspect`（切面编程层）

- 被调用：

  - 自动织入 `controller`、`service` 等层处理日志、安全等横切关注点。

### `app/utils`（工具层）

- 被调用：

  - `controller`
  - `service`
  - `mapper`
  - `model`（可选）

### `app/view`（视图层）

- 被调用：

  - `controller` 用于模板渲染（结合 `resources/templates`）

---

### `config`（配置目录）

- 被调用：

  - `init`：读取配置初始化。
  - `app`：全局配置使用，如数据库、缓存、超时等。

- 子目录说明：

  - `business`：业务层配置，如风控策略、规则开关。
  - `infrastructure`：

    - `hyperlane`：服务监听、路由、中间件配置。
    - `server_manager`：进程托管策略。

### `init`（初始化目录）

- 调用：

  - `config`：读取配置。
  - `plugin`：初始化日志、服务等插件。
  - `app`：初始化 controller/service 等组件。

- 被调用：

  - 由主程序启动时触发。

### `plugin`（插件目录）

- 被调用：

  - `controller` / `service` / `init` 均可能调用。

- 子模块：

  - `log`：日志记录、链路追踪。
  - `server_manager`：守护进程、PID 控制等。

---

### `resources`（资源目录）

- 子目录说明：

  - `static/html`、`img`：被 `view` 层或浏览器直接访问。
  - `templates/html`：被 `controller` 或 `view` 用于渲染页面。

<Bottom />
