'use client'

import { useCallback, useState, useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'theme'

function getInitialTheme(): Theme {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function subscribeNoop() {
  return () => {}
}

/**
 * localStorage와 html 엘리먼트의 dark 클래스를 동기화하는 다크모드 훅
 * mounted는 useSyncExternalStore로 구독해, 서버 스냅샷(false)과 클라이언트
 * 스냅샷(true)을 명시적으로 분리함으로써 하이드레이션 불일치를 피한다
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  )

  const applyTheme = useCallback((next: Theme) => {
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem(THEME_STORAGE_KEY, next)
    setTheme(next)
  }, [])

  const toggleTheme = useCallback(() => {
    applyTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, applyTheme])

  return { theme, toggleTheme, mounted }
}
