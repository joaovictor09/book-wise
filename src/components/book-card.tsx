import Image from 'next/image'
import { FilledStar } from './FilledStar'
import { Star } from 'lucide-react'

export function BookCard() {
  return (
    <div className="w-full rounded-lg bg-gray-700 p-5">
      <div className="flex gap-5">
        <Image
          src="/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
          className="h-auto w-full max-w-[64px] rounded-lg"
          height={94}
          width={64}
          alt=""
        />
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col">
            <strong className="line-clamp-2">
              14 hábitos de desenvolvedores altamente produtivos
            </strong>
            <span className="text-xs text-gray-400">Zeno Rocha</span>
          </div>
          <div className="flex gap-1 text-purple-100">
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <FilledStar />
            <Star className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
