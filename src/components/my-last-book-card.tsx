import Image from 'next/image'
import { FilledStar } from './FilledStar'
import { Star } from 'lucide-react'

export function MyLastBookCard() {
  return (
    <div className="w-full rounded-lg bg-gray-600 p-6">
      <div className="flex gap-4">
        <span className="text-sm text-gray-400">Há 2 dias</span>

        <div className="ml-auto flex gap-1 text-purple-100">
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <Star className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-8 flex  gap-5">
        <Image
          src="/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
          className="h-full max-h-[152px] w-auto rounded-lg"
          height={152}
          width={108}
          alt=""
        />
        <div className="flex flex-col">
          <strong>14 hábitos de desenvolvedores altamente produtivos</strong>
          <span className="text-xs text-gray-400">Zeno Rocha</span>
          <p className="mt-4 line-clamp-5 text-sm text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            beatae ad vitae omnis quibusdam corrupti est hic, molestiae autem
            similique quisquam quaerat commodi odio, nesciunt laborum magnam
            explicabo nulla maxime.
          </p>
        </div>
      </div>
    </div>
  )
}
