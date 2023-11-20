import { Glasses, Search } from 'lucide-react'
import { Categories } from './components/categories'
import { BookCard } from './components/book-card'
import { env } from 'process'

interface BookProps {
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

async function getBooks() {
  const res = await fetch(`${env.API_ENDPOINT}/api/books`)

  const { books } = await res.json()

  return books as BookProps[]
}

export default async function ExplorerPage() {
  const books = await getBooks()

  return (
    <div>
      <div className="mb-10 flex items-center justify-between ">
        <h1 className="flex items-center gap-3 text-2xl">
          <Glasses className="h-9 w-9 text-green-100" />
          Inicio
        </h1>

        <div className="group flex w-full max-w-md rounded-[4px] border border-gray-500 px-5 py-4 transition-all focus-within:border-green-200">
          <input
            type="text"
            className="w-full bg-transparent outline-none"
            placeholder="Buscar livro ou autor"
          />
          <Search className="h-5 w-5 text-gray-500 group-focus-within:text-green-200" />
        </div>
      </div>

      <Categories />

      <div className="mt-12 grid grid-cols-3 gap-5">
        {books.map((book) => (
          <BookCard key={book.id} readed {...book} />
        ))}
      </div>
    </div>
  )
}
