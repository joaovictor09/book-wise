import { SignInButton } from '@/components/sign-in-button'
import Image from 'next/image'

export default function SignInPage() {
  return (
    <div className="w-full min-h-screen p-5 flex">
      <div>
        <Image
          src="/sign-in-image.png"
          width={600}
          height={900}
          quality={100}
          className="h-full flex w-auto"
          alt="A woman reading a book"
        />
      </div>

      <div className="mx-auto flex w-full items-center flex-col justify-center max-w-sm gap-10">
        <div className="flex flex-col w-full">
          <h1 className="gray-100 text-2xl">Boas vindas!</h1>
          <span className="gray-200">
            Faça seu login ou acesse como visitante.
          </span>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <SignInButton imgSrc="/logo-google.png" label="Entrar com Google" />
          <SignInButton imgSrc="/logo-git.png" label="Entrar com GitHub" />
          <SignInButton
            imgSrc="/rocket-launch.png"
            label="Entrar como visitante"
          />
        </div>
      </div>
    </div>
  )
}
