import { BookCard } from '@/components/book-card'
import { CommentCard } from '@/components/comment-card'
import { MyLastBookCard } from '@/components/my-last-book-card'
import { ChevronRight, LineChart } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="flex items-center gap-3 text-2xl">
        <LineChart className="h-9 w-9 text-green-100" />
        Inicio
      </h1>

      <div className="mt-10 flex flex-1 gap-16">
        <div className="flex flex-col">
          <div className="flex flex-1 gap-16">
            <div className="flex-1">
              <div className="flex w-full items-center justify-between text-sm">
                <span>Sua última leitura</span>
                <Link
                  href=""
                  className="flex items-center gap-2 text-purple-100"
                >
                  Ver todos <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <MyLastBookCard />
              </div>
            </div>
          </div>

          <div className="mt-10 flex-1">
            <span className="text-sm">Avaliações mais recentes</span>
            <div className="mt-4 flex flex-col gap-3">
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </div>
          </div>
        </div>

        <div className="w-full max-w-xs text-sm">
          <div className="flex w-full items-center justify-between">
            <span>Livros populares</span>
            <Link href="" className="flex items-center gap-2 text-purple-100">
              Ver todos <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </div>
    </div>
  )
}
