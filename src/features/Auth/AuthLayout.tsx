import type { ReactNode } from 'react'
import { Logo } from '@/components/Logo'

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-background px-6 py-10">
      <Logo tagline="Track every application in one place" />
      <main className="mt-10 flex-1">{children}</main>
    </div>
  )
}