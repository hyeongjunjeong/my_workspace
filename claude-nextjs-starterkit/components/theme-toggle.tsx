'use client'

import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/use-theme'

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="다크모드 전환"
      onClick={toggleTheme}
    >
      {mounted && theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}
