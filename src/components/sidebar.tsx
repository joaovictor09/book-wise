'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Glasses, LineChart, LogIn, LogOut, User } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

interface RouteParams {
  href: string
  label: string
  icon: JSX.Element
}

export function Sidebar() {
  const pathName = usePathname()
  const [logged, setLogged] = useState(false)

  const routes = [
    {
      href: '/app',
      label: 'Inicio',
      icon: <LineChart />,
    },
    {
      href: '/app/explore',
      label: 'Explorar',
      icon: <Glasses />,
    },
    {
      href: '/app/profile',
      label: 'Perfil',
      icon: <User />,
    },
  ] as RouteParams[]

  return (
    <nav className="sticky top-5 flex max-h-[calc(100vh_-40px)] w-full max-w-xs flex-col rounded-xl bg-gray-700 px-12 py-10">
      <Image src={'/logo.png'} alt="BookWise logo" width={128} height={32} />

      <div className="mt-16 flex flex-col gap-4">
        {/* Activated */}

        {routes.map((route) => {
          if (pathName === route.href) {
            return (
              <div
                key={route.href}
                className="flex items-center gap-4 text-gray-100 transition-colors hover:text-gray-100"
              >
                <div className="h-6 w-1 rounded-full bg-gradient-to-b from-[#7FD1CC] to-[#9694F5]" />
                <Link href={route.href} className="flex items-center gap-3">
                  {route.icon}
                  {route.label}
                </Link>
              </div>
            )
          } else {
            return (
              <div
                key={route.href}
                className="flex items-center gap-4 text-gray-400 transition-colors hover:text-gray-100"
              >
                <div className="h-6 w-1 rounded-full bg-transparent" />
                <Link href={route.href} className="flex items-center gap-3">
                  {route.icon}
                  {route.label}
                </Link>
              </div>
            )
          }
        })}
      </div>

      {logged ? (
        <div className="mt-auto flex items-center gap-3 text-sm">
          <Image
            src="/avatar.png"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
            alt=""
          />
          <span>Cristofer</span>
          <button
            onClick={() => setLogged(!logged)}
            className="ml-auto flex items-center justify-center gap-3 text-gray-200"
          >
            <LogOut className="text-danger" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setLogged(!logged)}
          className="mt-auto flex items-center justify-center gap-3 text-gray-200"
        >
          Fazer login
          <LogIn className="text-green-100" />
        </button>
      )}
    </nav>
  )
}
