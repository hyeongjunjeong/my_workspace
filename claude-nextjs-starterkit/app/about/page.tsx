import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-10">
      <header className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">소개</h1>
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href="/">홈으로</Link>}
        />
      </header>

      <section className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Claude Next.js Starter Kit</CardTitle>
            <CardDescription>
              Next.js 16, React 19, Tailwind CSS v4, Base UI로 구성된 모던 웹
              스타터킷입니다
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            새 프로젝트를 빠르게 시작할 수 있도록 기본 레이아웃, 다크모드
            전환, 재사용 가능한 UI 컴포넌트를 제공합니다
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
