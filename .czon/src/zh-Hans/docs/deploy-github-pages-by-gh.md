# 部署到 GitHub Pages

本指南介绍如何通过 GitHub CLI 将 CZON 生成的多语言静态站点部署到 GitHub Pages。

首先安装 [GitHub CLI](https://cli.github.com/) 工具（如果尚未安装），并确保已登录 (如果尚未登录)：

```bash
$ gh --version # 查看版本，确保安装成功
```

确保已经登录，并确保有权限 `repo` 访问目标仓库:

```bash
$ gh auth login -s repo # 登录 GitHub 账号，会提示选择浏览器登录或使用 token 登录
$ gh auth status # 查看登录状态，确保已成功登录，并且有权限 repo 访问目标仓库
```

剩下的只需要运行以下命令，根据提示操作即可：

```bash
$ npx czon@latest config github
```

该命令会引导你完成以下步骤：

1. 检查 gh 的权限是否包含 repo，如果没有则提示重新登录并添加 repo 权限。
2. 如果本地目录不是 Git 仓库，会提示你初始化一个新的 Git 仓库。
3. 检查本地目录的远程 Git 仓库设置，查看是否有 GitHub 远程仓库，如果没有 GitHub 远程仓库，会提示你创建一个新的远程仓库并将其添加为远程 origin，如果 origin 已存在但不是 GitHub 仓库，则会提示你添加一个新的 GitHub 远程仓库作为 upstream。
4. 检查 GitHub Pages 是否启用，并且是 workflow 类型。如果不是，通过 API `gh api` 将其启用并改正为从 Actions 部署。同时设置 CNAME（如果你有自定义域名的话）。
5. 检查 GitHub Workflow 文件。如果未创建，创建 Pages Workflow 文件；如果已存在但不是最新版本，提示你是否更新 Workflow 文件。
6. 提交 Workflow 文件，并推送更改到远程仓库。
7. 提示访问 GitHub Pages 网站的 URL，通过 gh api 获取最新的 Pages URL。
