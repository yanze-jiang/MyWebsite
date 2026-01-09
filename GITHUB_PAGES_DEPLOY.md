# GitHub Pages 部署指南

本指南将一步步教你如何将网站部署到 GitHub Pages，并通过 `username.github.io/repository-name` 访问。

## 前提条件

- 已安装 Git
- 已注册 GitHub 账号
- 已安装 Node.js 和 npm

## 步骤 1: 在 GitHub 上创建新仓库

1. 登录 GitHub
2. 点击右上角的 "+" 号，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `MyWebsite` (或你喜欢的名字)
   - **Description**: 可选，填写你的网站描述
   - **Visibility**: 选择 Public（GitHub Pages 免费版需要公开仓库）
   - **不要**勾选 "Initialize this repository with a README"
4. 点击 "Create repository"

## 步骤 2: 初始化本地 Git 仓库

在项目根目录下打开终端，执行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "Initial commit: My personal website"

# 添加远程仓库（将 YOUR_USERNAME 替换为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/MyWebsite.git

# 将代码推送到 GitHub
git branch -M main
git push -u origin main
```

**注意**: 将 `YOUR_USERNAME` 替换为你的实际 GitHub 用户名。

## 步骤 3: 配置 GitHub Pages

1. 在 GitHub 仓库页面，点击右上角的 "Settings"（设置）
2. 在左侧菜单中找到 "Pages"（页面）
3. 在 "Source"（源）部分：
   - 选择 "GitHub Actions" 作为部署源
4. 保存设置

## 步骤 4: 触发首次部署

有两种方式触发部署：

### 方式 1: 自动触发（推荐）
- 当你推送代码到 `main` 分支时，GitHub Actions 会自动运行并部署

### 方式 2: 手动触发
1. 在仓库页面，点击 "Actions" 标签
2. 选择 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow" 按钮
4. 选择 "main" 分支，然后点击 "Run workflow"

## 步骤 5: 等待部署完成

1. 在 "Actions" 标签页中，你可以看到部署进度
2. 等待所有步骤显示绿色 ✓（通常需要 2-5 分钟）
3. 部署完成后，你会看到 "Deploy to GitHub Pages" 步骤显示成功

## 步骤 6: 访问你的网站

部署完成后，你的网站可以通过以下地址访问：

```
https://YOUR_USERNAME.github.io/MyWebsite/
```

**注意**: 
- 将 `YOUR_USERNAME` 替换为你的 GitHub 用户名
- 将 `MyWebsite` 替换为你的实际仓库名
- 首次部署可能需要几分钟才能生效

## 后续更新

每次更新网站后，只需：

```bash
# 添加更改
git add .

# 提交更改
git commit -m "Update website content"

# 推送到 GitHub
git push
```

GitHub Actions 会自动检测到更改并重新部署网站。

## 常见问题

### 1. 网站显示 404 错误
- 确保仓库是 Public（公开的）
- 检查 `vite.config.ts` 中的 `base` 路径是否与仓库名匹配
- 等待几分钟让部署生效

### 2. 样式或图片不显示
- 检查 `vite.config.ts` 中的 `base` 路径是否正确
- 确保所有资源路径使用相对路径

### 3. 路由不工作
- 确保 `App.tsx` 中的 `BrowserRouter` 设置了正确的 `basename`
- 检查 `vite.config.ts` 中的 `base` 配置

## 检查清单

在部署前，请确认：

- [ ] `vite.config.ts` 中的 `base: '/MyWebsite/'` 与仓库名匹配
- [ ] `App.tsx` 中的 `basename="/MyWebsite"` 与仓库名匹配
- [ ] 所有文件已提交到 Git
- [ ] 代码已推送到 GitHub
- [ ] GitHub Pages 已启用并设置为使用 GitHub Actions
- [ ] GitHub Actions 工作流已成功运行

## 需要帮助？

如果遇到问题，可以：
1. 检查 GitHub Actions 的日志输出
2. 查看 GitHub Pages 的设置
3. 确认所有配置都正确

祝你部署顺利！🎉
