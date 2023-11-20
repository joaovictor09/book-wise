'use client'

import Image from 'next/image'
import { FilledStar } from '@/components/FilledStar'
import { BookOpen, Bookmark, Check, Star, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Comment } from './comment'
import { useRef, useState } from 'react'
import classNames from 'classnames'

interface BookCardProps {
  readed?: boolean
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: string
  categories: {
    name: string
  }[]
  ratings: {
    rate: number
    description: string
  }[]
}

export function BookCard({
  readed,
  author,
  categories,
  cover_url: coverUrl,
  id,
  name,
  ratings,
  summary,
}: BookCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [commentText, setCommentText] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)

  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative w-full overflow-hidden rounded-lg bg-gray-700 p-5">
          {readed && (
            <div className="absolute right-0 top-0 rounded-bl bg-green-300 px-3 py-1 text-green-100">
              Lido
            </div>
          )}
          <div className="flex gap-5">
            <Image
              src={coverUrl}
              className="h-auto w-full max-w-[108px] rounded-lg"
              height={152}
              width={108}
              alt=""
            />
            <div className="flex flex-col justify-between gap-4 pr-8">
              <div className="flex flex-col text-start">
                <strong className="line-clamp-2">{name}</strong>
                <span className="text-xs text-gray-400">{author}</span>
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
      </SheetTrigger>
      <SheetContent className="scrollbar-thin scrollbar-track-rounded scrollbar-thumb-rounded scrollbar-thumb-gray-600 scrollbar-track-gray-700 w-[660px] overflow-y-auto">
        <div className="mt-10 flex w-full flex-col rounded-lg bg-gray-700 px-8 pb-4 pt-6">
          <div className="flex gap-8">
            <Image
              src="/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
              className="h-auto w-full max-w-[171px] rounded-lg"
              height={242}
              width={171}
              alt=""
            />

            <div className="flex flex-col justify-between">
              <div>
                <strong className="block text-lg">
                  14 Hábitos de Desenvolvedores Altamente Produtivos
                </strong>
                <span className="text-gray-300">Zeno Rocha</span>
              </div>

              <div>
                <div className="flex gap-1 text-purple-100">
                  <FilledStar />
                  <FilledStar />
                  <FilledStar />
                  <FilledStar />
                  <Star className="h-4 w-4" />
                </div>
                <span className="text-sm text-gray-400">3 avaliações</span>
              </div>
            </div>
          </div>

          <div className="mt-10  flex gap-14 border-t border-gray-600 py-6">
            <div className="flex w-full items-center gap-4">
              <Bookmark className="text-green-100" />
              <div>
                <span className="block text-gray-300">Categoria</span>
                <strong className="text-gray-200">Computação, educação</strong>
              </div>
            </div>

            <div className="flex w-full items-center gap-4">
              <BookOpen className="text-green-100" />
              <div>
                <span className="block text-gray-300">Páginas</span>
                <strong className="text-gray-200">160</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex w-full items-center justify-between text-sm">
            <span>Avaliações</span>
            {isEditing && (
              <button
                onClick={() => {
                  setIsEditing(!isEditing)
                  inputRef.current && inputRef.current.focus()
                }}
                className="flex items-center gap-2 text-purple-100"
              >
                Avaliar
              </button>
            )}
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <div
              className={classNames(
                'rounded-lg bg-gray-700 p-6',
                isEditing ? 'h-0 p-0 opacity-0' : 'opacity-100',
              )}
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src="https://placehold.co/100x100/png"
                    height={40}
                    width={40}
                    quality={100}
                    className="h-10 w-10 rounded-full bg-gray-800"
                    alt=""
                  />
                  <strong>Cristofer Rosser</strong>
                </div>

                <div className="flex gap-1 text-purple-100">
                  <FilledStar width="28" height="28" />
                  <FilledStar width="28" height="28" />
                  <FilledStar width="28" height="28" />
                  <FilledStar width="28" height="28" />
                  <Star className="h-7 w-7" />
                </div>
              </div>

              <div className="relative mt-6 rounded border border-green-200 bg-gray-800 px-3 py-5">
                <textarea
                  rows={5}
                  value={commentText}
                  ref={inputRef}
                  onChange={(e) => {
                    setCommentText(e.target.value)
                  }}
                  maxLength={450}
                  className="scrollbar-thin scrollbar-track-rounded scrollbar-thumb-rounded scrollbar-thumb-gray-600 scrollbar-track-gray-700 w-full resize-none bg-transparent outline-none"
                />
                <span className="absolute bottom-0 right-0 pb-1 pr-2 text-xs text-[#7C7C8A]">
                  {commentText.length} / 450
                </span>
              </div>

              <div className="mt-3 flex items-center justify-end gap-2">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center justify-center rounded bg-gray-600 p-2"
                >
                  <X className="h-6 w-6 text-purple-100" />
                </button>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center justify-center rounded bg-gray-600 p-2"
                >
                  <Check className="h-6 w-6 text-green-100" />
                </button>
              </div>
            </div>

            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
