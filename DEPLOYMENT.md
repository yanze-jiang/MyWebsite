# 部署指南

## GitHub Pages 部署步骤

### 1. 创建 GitHub 仓库

1. 在 GitHub 上创建一个新仓库（例如：`MyWebsite`）
2. 将仓库设置为公开（Public），或者使用 GitHub Pro 账户

### 2. 配置仓库名称

如果您的 GitHub 仓库名称不是 `MyWebsite`，需要修改以下两个文件：

**vite.config.ts**
```typescript
base: '/您的仓库名/', // 修改这里的路径
```

**src/App.tsx**
```typescript
<BrowserRouter basename="/您的仓库名">
```

### 3. 启用 GitHub Pages

1. 进入仓库的 Settings（设置）
2. 找到 Pages 选项
3. 在 Source 中选择 "GitHub Actions"
4. 保存设置

### 4. 推送代码到 GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/您的用户名/您的仓库名.git
git push -u origin main
```

### 5. 自动部署

推送代码后，GitHub Actions 会自动：
1. 构建项目
2. 部署到 GitHub Pages

部署完成后，您的网站将可以通过以下地址访问：
`https://您的用户名.github.io/您的仓库名/`

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 注意事项

- 确保仓库名称与 `vite.config.ts` 和 `App.tsx` 中的配置一致
- 首次部署可能需要几分钟时间
- 如果使用自定义域名，需要在 `public` 目录下创建 `CNAME` 文件
