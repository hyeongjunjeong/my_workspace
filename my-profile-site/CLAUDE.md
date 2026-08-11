# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

정형준의 개인 포트폴리오 사이트입니다. 빌드 도구나 패키지 매니저 없이 순수 HTML/CSS/JS로 작성된 정적 사이트이며, 스타일링은 Tailwind CSS CDN(`index.html`에 인라인 config 포함)을 사용합니다.

## 실행 방법

별도의 설치/빌드 과정이 없습니다. `index.html`을 브라우저로 직접 열거나, 로컬 정적 서버로 서빙하면 됩니다 (예: VS Code Live Server, `npx serve .`).

## 구조

- `index.html` — 전체 페이지(네비게이션, 히어로, 소개, 기술 스택, 프로젝트, 발전 계획, 연락처)가 담긴 단일 HTML 파일. Tailwind 테마 설정(`accent` 컬러, `fadeInUp`/`blob` 커스텀 애니메이션)도 `<head>` 내 인라인 스크립트에 정의됨.
- `css/style.css` — Tailwind 유틸리티로 표현하기 어려운 보조 스타일만 포함: 한글 줄바꿈 처리(`word-break: keep-all`), 스크롤 페이드인 애니메이션(`.fade-in-section`/`.is-visible`), 커스텀 스크롤바, 활성 네비 링크 표시(`.nav-link.active`).
- `js/main.js` — 바닐라 JS로 작성된 4가지 기능:
  - 다크/라이트 모드 토글 (localStorage에 `theme` 키로 저장, 기본값 dark)
  - 모바일 메뉴 토글
  - `IntersectionObserver` 기반 스크롤 등장 애니메이션 (`.fade-in-section` 요소에 `is-visible` 클래스 부여)
  - 스크롤 위치에 따른 네비게이션 활성 링크 하이라이트 (`data-section` 속성 매칭)
- `images/` — 프로필 이미지(`profile.jpg`, 권장 정사각형 300x300px 이상). 이미지 로드 실패 시 `index.html`의 `onerror` 핸들러가 이니셜("HJ") placeholder로 자동 대체됨. 이미지를 교체할 때는 `images/profile.jpg`를 덮어쓰거나, 다른 파일명을 쓸 경우 `index.html`의 `<img src="images/profile.jpg">` 경로도 함께 수정.

## 작업 시 주의사항

- 새 섹션을 추가할 때는 기존 패턴을 따를 것: 섹션 최상위 컨테이너에 `fade-in-section` 클래스를 부여해 스크롤 등장 애니메이션을 적용하고, 다크모드 대응은 `dark:` prefix 유틸리티로 처리.
- 네비게이션에 새 섹션을 추가하면 `index.html`의 데스크톱/모바일 메뉴 두 곳(`.nav-link`, `.mobile-nav-link`)과 해당 `<section id="...">`를 함께 수정해야 하며, `data-section` 값이 section의 `id`와 일치해야 활성 링크 하이라이트가 동작함.
- Tailwind 커스텀 색상(`accent`, `accent-light`, `accent-dark`)과 애니메이션(`animate-fade-in-up`, `animate-blob`)은 `index.html` 상단의 `tailwind.config` 인라인 스크립트에서 정의되므로, 별도 설정 파일이 없음에 유의.

## 코드 스타일

- 들여쓰기: 스페이스 2칸
- 변수명: camelCase
- 함수명: 동사로 시작 (예: `getUserDate`, `handleClick`)
- 주석: 한글로 작성

## Git 규칙

- 커밋 메시지: 한글로 작성
- 브랜치명: `feature/기능명` 형식

## 언어 및 커뮤니케이션 규칙

- 기본 응답 언어: 한국어
- 코드 주석: 한국어로 작성
- 커밋 메시지: 한국어로 작성
- 문서화: 한국어로 작성
- 변수명/함수명: 영어 (코드 표준 준수)
