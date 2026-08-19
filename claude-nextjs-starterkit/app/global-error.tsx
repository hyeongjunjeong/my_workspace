'use client'

import { useEffect } from 'react'

export default function GlobalError({
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
    <html lang="ko">
      <body
        style={{
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          padding: '1rem',
          textAlign: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>
          심각한 오류가 발생했습니다
        </h1>
        <p style={{ fontSize: '0.875rem', color: '#666' }}>{error.message}</p>
        <button
          onClick={() => retry()}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            border: '1px solid #ccc',
            cursor: 'pointer',
          }}
        >
          다시 시도
        </button>
      </body>
    </html>
  )
}
