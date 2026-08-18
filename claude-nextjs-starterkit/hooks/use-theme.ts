'use client'

import { useCallback, useState } from 'react'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'theme'

function getInitialTheme(): Theme {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

/**
 * localStorage와 html 엘리먼트의 dark 클래스를 동기화하는 다크모드 훅
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  const applyTheme = useCallback((next: Theme) => {
    document.documentElement.classList.toggle('dark', next === 'dark')
    localStorage.setItem(THEME_STORAGE_KEY, next)
    setTheme(next)
  }, [])

  const toggleTheme = useCallback(() => {
    applyTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, applyTheme])

  return { theme, toggleTheme }
}
