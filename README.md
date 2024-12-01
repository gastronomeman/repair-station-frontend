# Repair Station Frontend

**Repair Station Frontend** 该项目是校园电脑维修管理系统的前端部分，基于 Vue 3 和 Vite 构建，集成了 NutUI 和 Element Plus 组件库，提供了丰富的界面组件和交互效果。此项目需要与后端系统结合使用，以实现完整的功能。后端接口的实现请参考 [后端文档](https://gitee.com/gastronome-0_0/repair-station-backend)。

## 项目简介

本项目是广东农工商职业技术学院“ITeam基地维修站”的合作项目，专注于校内电脑维修管理，通过前后端分离的架构实现高效、可靠的服务。前端基于 Vue 3 和 Vite 开发，集成了 NutUI 和 Element Plus 组件库，提供了丰富的界面组件和交互效果。

## 核心功能

- **用户功能**：提交维修订单、查询订单状态、查看公告。
- **维修人员功能**：接单、转单、管理个人信息、查看统计数据。
- **管理员功能**：批量导出订单记录、查看系统统计。

## 推荐的开发工具

我们推荐使用以下开发工具，以便获得更好的开发体验：

- **[VSCode](https://code.visualstudio.com/)**：主流的代码编辑器。
- **[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)** 插件（请禁用 Vetur）：为 Vue 3 提供支持。

## 安装与运行

以下是如何安装和运行此项目的步骤。

### 安装依赖

```sh
pnpm install
```

### 配置后端地址与 ICP 备案

在 `public/config.js` 文件中，你需要设置后端 API 地址以及 ICP 备案信息：

```js
window.config = {
  apiBaseUrl: "https://your-backend-api-url", // 设置后端 API 地址
  icp: "ICP备案号" // 设置 ICP 备案号
};
```

### 启动开发服务器

```sh
pnpm dev
```

项目运行后，可以通过浏览器访问 [http://localhost:5173](http://localhost:5173) 查看开发环境下的页面。

### 构建生产版本

```sh
pnpm build
```

生产版本的代码将输出到 `dist` 目录中。

### 代码检查与格式化

```sh
pnpm lint
```

## 部署说明

本项目的前端部署使用现代化的 Web 服务器（如 Nginx）。构建生产版本后，将 `dist` 文件夹的内容上传至服务器，并配置对应的 Web 路径即可。

## 开源与合作

该项目已托管在 Gitee：

- **前端代码**：[repair-station-frontend](https://gitee.com/gastronome-0_0/repair-station-frontend)
- **后端代码**：[repair-station-backend](https://gitee.com/gastronome-0_0/repair-station-backend)

如有任何问题或合作意向，欢迎提交 Issue 或联系项目负责人。