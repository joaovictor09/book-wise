import { Star } from 'lucide-react'
import Image from 'next/image'
import { FilledStar } from '@/components/FilledStar'

export function BookCard() {
  return (
    <div className="flex flex-col">
      <span className="mb-2 text-sm text-gray-300">Hoje</span>
      <div className="flex w-full flex-col gap-6 rounded-lg bg-gray-700 p-6">
        <div className="flex gap-6">
          <Image
            src="/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
            className="h-full max-h-[134px] w-auto rounded-lg"
            height={152}
            width={108}
            alt=""
          />
          <div className="flex flex-col justify-between">
            <div>
              <strong className="block text-lg">
                14 hábitos de desenvolvedores altamente produtivos
              </strong>
              <span className="text-sm text-gray-400">Zeno Rocha</span>
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
        <div className="flex flex-col">
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
