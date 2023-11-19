import Image from 'next/image'
import Link from 'next/link'

interface SignInButtonProps {
  label: string
  imgSrc: string
}

export function SignInButton({ imgSrc, label }: SignInButtonProps) {
  return (
    <Link
      href={'/app'}
      className="w-full px-6 py-5 text-gray-200 hover:text-gray-100 flex gap-5 bg-gray-600 hover:bg-gray-500 transition-colors rounded-lg"
    >
      <Image src={imgSrc} height={32} width={32} alt="Google logo" />
      <span className="text-lg">{label}</span>
    </Link>
  )
}
