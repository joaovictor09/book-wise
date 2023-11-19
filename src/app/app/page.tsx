import { CommentCard } from '@/components/comment-card'
import { LineChart } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <h1 className="flex items-center gap-3 text-2xl">
        <LineChart className="h-9 w-9 text-green-100" />
        Inicio
      </h1>

      <div className="mt-10 flex flex-1 gap-16">
        <div className="flex-1">
          <span className="text-sm">Avaliações mais recentes</span>
          <div className="mt-4 flex flex-col gap-3">
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </div>

        <div className="w-full max-w-xs text-sm">Livros populares</div>
      </div>
    </div>
  )
}
