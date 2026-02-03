---
"title": "部署 CZON 靜態網站到 GitHub Pages 指南"
"summary": "本文詳細介紹了如何透過 GitHub CLI 將 CZON 生成的多語言靜態網站部署到 GitHub Pages。首先需要安裝並登入 GitHub CLI，確保擁有 repo 權限。然後執行 npx czon@latest config github 命令，該命令會引導使用者完成一系列步驟，包括檢查權限、初始化 Git 倉庫、設定遠端倉庫、啟用 GitHub Pages 並設定為 workflow 類型、建立或更新 Workflow 檔案、提交並推送變更，最後取得 Pages URL。整個過程自動化，簡化了部署流程。"
"tags":
  - "GitHub Pages"
  - "CZON"
  - "靜態網站"
  - "部署指南"
  - "GitHub CLI"
  - "多語言"
  - "自動化部署"
---

# 部署到 GitHub Pages

本指南介紹如何透過 GitHub CLI 將 CZON 生成的多語言靜態網站部署到 GitHub Pages。

首先安裝 [GitHub CLI](https://cli.github.com/) 工具（如果尚未安裝），並確保已登入 (如果尚未登入)：

```bash
$ gh --version # 查看版本，確保安裝成功
```

確保已經登入，並確保有權限 `repo` 存取目標倉庫:

```bash
$ gh auth login -s repo # 登入 GitHub 帳號，會提示選擇瀏覽器登入或使用 token 登入
$ gh auth status # 查看登入狀態，確保已成功登入，並且有權限 repo 存取目標倉庫
```

剩下的只需要執行以下命令，根據提示操作即可：

```bash
$ npx czon@latest config github
```

該命令會引導你完成以下步驟：

1.  檢查 gh 的權限是否包含 repo，如果沒有則提示重新登入並新增 repo 權限。
2.  如果本地目錄不是 Git 倉庫，會提示你初始化一個新的 Git 倉庫。
3.  檢查本地目錄的遠端 Git 倉庫設定，查看是否有 GitHub 遠端倉庫，如果沒有 GitHub 遠端倉庫，會提示你建立一個新的遠端倉庫並將其新增為遠端 origin，如果 origin 已存在但不是 GitHub 倉庫，則會提示你新增一個新的 GitHub 遠端倉庫作為 upstream。
4.  檢查 GitHub Pages 是否啟用，並且是 workflow 類型。如果不是，透過 API `gh api` 將其啟用並改正為從 Actions 部署。同時設定 CNAME（如果你有自訂網域的話）。
5.  檢查 GitHub Workflow 檔案。如果未建立，建立 Pages Workflow 檔案；如果已存在但不是最新版本，提示你是否更新 Workflow 檔案。
6.  提交 Workflow 檔案，並推送變更到遠端倉庫。
7.  提示存取 GitHub Pages 網站的 URL，透過 gh api 取得最新的 Pages URL。