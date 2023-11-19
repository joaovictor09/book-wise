import { Sidebar } from '@/components/sidebar'
import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full p-5">
      <Sidebar />
      <main className="w-full px-24 pt-14">{children}</main>
    </div>
  )
}
