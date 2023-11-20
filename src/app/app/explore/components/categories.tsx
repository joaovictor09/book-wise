import { Category } from './category'

export function Categories() {
  return (
    <div className="flex gap-3">
      <Category active label="Tudo" />
      <Category label="Computação" />
      <Category label="Educação" />
      <Category label="Fantasia" />
      <Category label="Ficção científica" />
      <Category label="Horror" />
      <Category label="HQs" />
      <Category label="Suspense" />
    </div>
  )
}
