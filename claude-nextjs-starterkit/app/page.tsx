import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ThemeToggle } from '@/components/theme-toggle'

const stack = [
  {
    name: 'Next.js 16',
    description: 'App Router 기반 React 프레임워크',
  },
  {
    name: 'React 19',
    description: '최신 React 런타임',
  },
  {
    name: 'Tailwind CSS v4',
    description: '유틸리티 우선 CSS 프레임워크',
  },
  {
    name: 'Base UI',
    description: '접근성을 갖춘 헤드리스 컴포넌트',
  },
]

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-10">
      <header className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Claude Next.js Starter Kit</h1>
        <nav className="flex items-center gap-2">
          <Button
            variant="ghost"
            nativeButton={false}
            render={<Link href="/about">소개</Link>}
          />
          <Button
            variant="ghost"
            nativeButton={false}
            render={<Link href="/dashboard">대시보드</Link>}
          />
          <ThemeToggle />
        </nav>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-muted-foreground">
          포함된 스택
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {stack.map((item) => (
            <Card key={item.name}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-muted-foreground">
          버튼 컴포넌트
        </h2>
        <Card>
          <CardContent className="flex flex-wrap gap-2">
            <Button variant="default">Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-muted-foreground">
          Input 컴포넌트
        </h2>
        <Card>
          <CardContent>
            <Input type="email" placeholder="you@example.com" />
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
