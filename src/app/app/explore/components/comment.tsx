import { FilledStar } from '@/components/FilledStar'
import { Star } from 'lucide-react'
import Image from 'next/image'

export function Comment() {
  return (
    <div className="rounded-lg bg-gray-700 p-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Image
            src="https://placehold.co/100x100/png"
            height={40}
            width={40}
            quality={100}
            className="h-10 w-10 rounded-full bg-gray-800"
            alt=""
          />
          <div>
            <strong className="block text-gray-100">Brandon Botosh</strong>
            <span className="text-sm text-gray-400">Há 2 dias</span>
          </div>
        </div>

        <div className="flex gap-1 text-purple-100">
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <Star className="h-4 w-4" />
        </div>
      </div>

      <p className="mt-5 text-justify text-sm text-gray-300">
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </p>
    </div>
  )
}
