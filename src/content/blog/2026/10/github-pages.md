---
title: 빌드 결과를 GitHub Pages에 올리기
date: 2026-10-04
description: astro build가 만든 dist 폴더를 GitHub Actions가 Pages에 배포합니다.
category: 개발
tags: [github-pages, 정적사이트]
---

이 블로그는 요청마다 페이지를 만들지 않습니다. `npm run build`가 HTML, CSS, 글 페이지를 `dist`에 미리 만들어 둡니다.

GitHub에 올린 뒤 Actions 권한이 켜져 있으면, `main`에 푸시할 때마다 워크플로가 그 폴더를 Pages에 배포합니다. 저장소 이름이 `username.github.io`이면 사이트 주소는 도메인 루트이고, 그 외에는 `/저장소이름` 아래에 붙습니다.

로컬에서 결과를 먼저 보려면 `npm run build` 다음에 `npm run preview`를 실행합니다.
