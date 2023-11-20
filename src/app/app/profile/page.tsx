import {
  BookOpen,
  Bookmark,
  LibraryBig,
  Search,
  User,
  Users,
} from 'lucide-react'
import { BookCard } from './components/book-card'
import Image from 'next/image'

export default function ProfilePage() {
  return (
    <div>
      <h1 className="flex items-center gap-3 text-2xl">
        <User className="h-9 w-9 text-green-100" />
        Perfil
      </h1>

      <div className="flex gap-16">
        <div className="flex-1">
          <div className="group mt-10 flex w-full rounded-[4px] border border-gray-500 px-5 py-4 transition-all focus-within:border-green-200">
            <input
              type="text"
              className="h-full w-full bg-transparent outline-none"
              placeholder="Buscar livro avaliado"
            />
            <Search className="h-5 w-5 text-gray-500 group-focus-within:text-green-200" />
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>

        <div className="flex h-max w-full max-w-xs flex-col items-center justify-center border-l border-gray-700">
          <div className="flex flex-col items-center gap-5">
            <Image
              src="https://placehold.co/100x100/png"
              height={64}
              width={64}
              quality={100}
              className="h-16 w-16 rounded-full bg-gray-800"
              alt=""
            />
            <div className="text-center">
              <strong className="block text-lg">Cristofer Rosser </strong>
              <span className="text-sm text-gray-400">membro desde 2019</span>
            </div>
          </div>

          <div className="my-8 flex">
            <div className="h-1 w-8 rounded-full bg-gradient-to-r from-[#7FD1CC] to-[#9694F5]" />
          </div>

          <div className="flex w-full flex-col gap-10 px-14">
            <div className="flex items-center justify-start gap-5">
              <BookOpen />
              <div>
                <strong className="block text-gray-200">3853</strong>
                <span className="text-gray-300">Páginas lidas</span>
              </div>
            </div>

            <div className="flex items-center justify-start  gap-5">
              <LibraryBig />
              <div>
                <strong className="block text-gray-200">10</strong>
                <span className="text-gray-300">Livros avaliados</span>
              </div>
            </div>

            <div className="flex items-center justify-start  gap-5">
              <Users />
              <div>
                <strong className="block text-gray-200">8</strong>
                <span className="text-gray-300">Autores lidos</span>
              </div>
            </div>

            <div className="flex items-center justify-start  gap-5">
              <Bookmark />
              <div>
                <strong className="block text-gray-200">Computação</strong>
                <span className="text-gray-300">Categoria mais lida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
