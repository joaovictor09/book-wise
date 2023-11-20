import classNames from 'classnames'

interface CategoryProps {
  label: string
  active?: boolean
}

export function Category({ active = false, label }: CategoryProps) {
  return (
    <div
      className={classNames(
        'flex rounded-full border px-4 py-1 text-center',
        active
          ? 'border-transparent bg-purple-200 text-gray-100'
          : 'border-purple-100 bg-transparent text-purple-100',
      )}
    >
      {label}
    </div>
  )
}
