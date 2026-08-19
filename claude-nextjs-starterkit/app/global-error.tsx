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
      <head>
        <style>{globalErrorStyle}</style>
      </head>
      <body className="global-error-body">
        <h1 className="global-error-title">심각한 오류가 발생했습니다</h1>
        <p className="global-error-message">{error.message}</p>
        <button className="global-error-button" onClick={() => retry()}>
          다시 시도
        </button>
      </body>
    </html>
  )
}

const globalErrorStyle = `
  .global-error-body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    text-align: center;
    font-family: sans-serif;
    background: #fff;
    color: #111;
  }
  .global-error-title {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .global-error-message {
    font-size: 0.875rem;
    color: #666;
  }
  .global-error-button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #fff;
    color: #111;
  }
  @media (prefers-color-scheme: dark) {
    .global-error-body {
      background: #0a0a0a;
      color: #eee;
    }
    .global-error-message {
      color: #aaa;
    }
    .global-error-button {
      background: #1a1a1a;
      color: #eee;
      border-color: #333;
    }
  }
`
