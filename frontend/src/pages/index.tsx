import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=' flex justify-center'>
      <Head>
        <title>Projeto FullStack </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-slate-100">Bem-vindo ao Projeto FullStack</h1>
          <p className="mt-2 text-lg text-gray-600">Esta é a minha primeira página criada com Next.JS, Tailwindcss e Typescript.</p>
          <div className="mt-6 space-x-4 flex justify-center">
            <Link href="/login">
              <button className=' bg-slate-400 rounded-sm text-blue-700 p-1 w-20'>Login</button>
            </Link>
            <Link href="/register">
              <button className=' bg-slate-400 rounded-sm text-blue-700 p-1 w-20'>Cadastro</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

