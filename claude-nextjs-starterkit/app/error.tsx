'use client'

import { useEffect } from 'react'

import { Button } from '@/components/ui/button'

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-semibold">문제가 발생했습니다</h1>
      <p className="text-sm text-muted-foreground">{error.message}</p>
      <Button onClick={() => retry()}>다시 시도</Button>
    </div>
  )
}
