# Claude Next.js Starter Kit

빠르게 웹 개발을 시작할 수 있도록 구성한 모던 웹 스타터킷입니다.

## 스택

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Base UI](https://base-ui.com) — 헤드리스 컴포넌트 프리미티브
- [class-variance-authority](https://cva.style/docs) — 컴포넌트 variant 관리
- [lucide-react](https://lucide.dev) — 아이콘

## 시작하기

개발 서버 실행:

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 결과를 확인할 수 있습니다.

주요 명령어:

```bash
npm run dev    # 개발 서버 실행
npm run build  # 프로덕션 빌드
npm run start  # 프로덕션 서버 실행
npm run lint   # 린트 검사
```

## 폴더 구조

```
app/                라우트, 레이아웃, 전역 스타일
  layout.tsx         루트 레이아웃 (메타데이터, 폰트, 다크모드 초기화 스크립트)
  page.tsx            홈페이지
  loading.tsx          라우트 전환 시 로딩 UI
  error.tsx             에러 바운더리
  not-found.tsx          404 페이지
  global-error.tsx        루트 레이아웃 레벨 에러 바운더리
components/          재사용 컴포넌트
  ui/                  기본 UI 컴포넌트 (Button, Card, Input 등)
  theme-toggle.tsx      다크모드 토글 버튼
hooks/                커스텀 훅
  use-theme.ts           다크모드 상태 훅
lib/                  유틸리티 함수
  utils.ts               cn() 클래스 병합 함수
```

## 다크모드

`app/globals.css`에 라이트/다크 테마 CSS 변수가 정의되어 있고, `hooks/use-theme.ts`와
`components/theme-toggle.tsx`로 `html` 엘리먼트의 `dark` 클래스를 토글합니다.
`app/layout.tsx`의 인라인 스크립트가 하이드레이션 전에 저장된 테마를 적용해
화면 깜빡임(FOUC)을 방지합니다.

## 컴포넌트 추가하기

`components/ui/`의 컴포넌트는 [Base UI](https://base-ui.com) 프리미티브를
[class-variance-authority](https://cva.style/docs)로 감싸는 패턴을 따릅니다
(`components/ui/button.tsx` 참고). 새 컴포넌트를 추가할 때도 동일한 패턴
(`data-slot` 속성, `cn()`을 통한 클래스 병합)을 유지해주세요.

`components.json`에 shadcn CLI 설정(`style: "base-nova"`)이 정의되어 있어
`npx shadcn add <컴포넌트>`로도 호환 컴포넌트를 추가할 수 있습니다.
