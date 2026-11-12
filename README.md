# Day 27

마크다운 글을 정적 페이지로 만드는 블로그입니다. 빌드 결과물은 GitHub Pages에 올립니다.

## 글 추가

`src/content/blog/연도/월/슬러그.md` 파일을 만듭니다.

```yaml
title: 글 제목
date: 2026-11-12
description: 한 줄 요약
category: 노트
tags: [기록]
draft: false
```

`draft: true`인 글은 빌드에서 빠집니다. 카테고리와 태그는 같은 이름끼리 페이지가 만들어집니다.

## 명령

Node.js 22.22 이상이 필요합니다.

```sh
npm install
npm run dev
npm run build
npm run preview
```

`npm run build`가 `dist` 폴더를 만듭니다.

## GitHub Pages

저장소 Settings → Pages → Source를 **GitHub Actions**로 둡니다. `main`에 푸시하면 `.github/workflows/deploy.yml`이 빌드 후 배포합니다.

- 저장소가 `username.github.io`이면 주소는 `https://username.github.io`
- 그 외에는 `https://username.github.io/저장소이름`
