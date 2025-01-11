---
title: LTPP-GIT仓库常用命令
index: true
icon: book
category:
  - LTPP-GIT仓库常用命令文档
  - 教程
---

#### 命令行指引

##### Git 全局设置

```sh
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"
```

##### 创建一个新仓库

```sh
git clone ssh://git@git.ltpp.vip:66/你的仓库.git
cd ltpp-week-contest-photo
git switch --create main
touch README.md
git add README.md
git commit -m "add README"
git push --set-upstream origin main
```

##### 推送现有文件夹

```sh
cd existing_folder
git init --initial-branch=main
git remote add origin ssh://git@git.ltpp.vip:66/你的仓库.git
git add .
git commit -m "提交信息"
git push --set-upstream origin main
```

##### 推送现有的 Git 仓库

```sh
cd existing_repo
git remote rename origin old-origin
git remote add origin ssh://git@git.ltpp.vip:66/你的仓库.git
git push --set-upstream origin --all
git push --set-upstream origin --tags
```

<Bottom />
