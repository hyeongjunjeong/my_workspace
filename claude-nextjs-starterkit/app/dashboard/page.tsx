import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const stats = [
  {
    name: '페이지',
    description: '현재 3개의 라우트가 등록되어 있습니다',
  },
  {
    name: '컴포넌트',
    description: 'Button, Card, Input이 준비되어 있습니다',
  },
  {
    name: '테마',
    description: '라이트/다크 모드를 지원합니다',
  },
]

export default function DashboardPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-10">
      <header className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">대시보드</h1>
        <Button
          variant="outline"
          nativeButton={false}
          render={<Link href="/">홈으로</Link>}
        />
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {stats.map((item) => (
          <Card key={item.name}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  )
}
