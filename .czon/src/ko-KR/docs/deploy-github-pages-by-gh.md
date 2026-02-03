---
"title": "CZON 정적 사이트를 GitHub Pages에 배포하는 가이드"
"summary": "이 문서는 GitHub CLI를 사용하여 CZON으로 생성된 다국어 정적 사이트를 GitHub Pages에 배포하는 방법을 상세히 설명합니다. 먼저 GitHub CLI를 설치하고 로그인하여 repo 권한을 보유해야 합니다. 그런 다음 `npx czon@latest config github` 명령어를 실행하면, 권한 확인, Git 저장소 초기화, 원격 저장소 설정, GitHub Pages 활성화 및 workflow 유형으로 설정, Workflow 파일 생성 또는 업데이트, 변경 사항 커밋 및 푸시, 마지막으로 Pages URL 획득까지 일련의 단계를 안내받게 됩니다. 전체 과정이 자동화되어 배포 프로세스를 간소화합니다."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "정적 사이트"
  - "배포 가이드"
  - "GitHub CLI"
  - "다국어"
  - "자동화 배포"
---

# GitHub Pages에 배포하기

이 가이드는 GitHub CLI를 통해 CZON으로 생성된 다국어 정적 사이트를 GitHub Pages에 배포하는 방법을 설명합니다.

먼저 [GitHub CLI](https://cli.github.com/) 도구를 설치하세요 (아직 설치되지 않은 경우). 그리고 로그인되어 있는지 확인하세요 (아직 로그인하지 않았다면):

```bash
$ gh --version # 버전을 확인하여 설치가 성공했는지 확인합니다.
```

로그인되어 있고 대상 저장소에 대한 `repo` 접근 권한이 있는지 확인하세요:

```bash
$ gh auth login -s repo # GitHub 계정에 로그인합니다. 브라우저 로그인 또는 토큰 사용을 선택하라는 메시지가 표시됩니다.
$ gh auth status # 로그인 상태를 확인하고, 성공적으로 로그인되었으며 대상 저장소에 대한 repo 권한이 있는지 확인합니다.
```

나머지는 다음 명령어를 실행하고 안내에 따르기만 하면 됩니다:

```bash
$ npx czon@latest config github
```

이 명령어는 다음 단계를 안내합니다:

1.  gh의 권한에 repo가 포함되어 있는지 확인합니다. 없으면 다시 로그인하여 repo 권한을 추가하라는 메시지가 표시됩니다.
2.  로컬 디렉토리가 Git 저장소가 아닌 경우, 새로운 Git 저장소를 초기화하라는 메시지가 표시됩니다.
3.  로컬 디렉토리의 원격 Git 저장소 설정을 확인하여 GitHub 원격 저장소가 있는지 확인합니다. GitHub 원격 저장소가 없으면 새로운 원격 저장소를 생성하고 이를 원격 origin으로 추가하라는 메시지가 표시됩니다. origin이 이미 존재하지만 GitHub 저장소가 아닌 경우, 새로운 GitHub 원격 저장소를 upstream으로 추가하라는 메시지가 표시됩니다.
4.  GitHub Pages가 활성화되어 있고 workflow 유형인지 확인합니다. 그렇지 않은 경우, API `gh api`를 통해 활성화하고 Actions에서 배포되도록 수정합니다. 또한 CNAME도 설정합니다 (사용자 정의 도메인이 있는 경우).
5.  GitHub Workflow 파일을 확인합니다. 생성되지 않은 경우 Pages Workflow 파일을 생성합니다. 이미 존재하지만 최신 버전이 아닌 경우 Workflow 파일을 업데이트할지 묻는 메시지가 표시됩니다.
6.  Workflow 파일을 커밋하고 변경 사항을 원격 저장소에 푸시합니다.
7.  GitHub Pages 웹사이트 URL에 접속하라는 메시지가 표시되며, gh api를 통해 최신 Pages URL을 가져옵니다.