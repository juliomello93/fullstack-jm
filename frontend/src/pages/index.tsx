import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex flex-col items-center p-24 ${inter.className}`}>
      <div className=' bg-slate-300 rounded-2xl shadow-2xl flex w-full'>
        <div className=' w-3/5 p-5 border-r-4 border-sky-900 text-black'>
          <p className=' text-black text-center mt-9 text-2xl'>Login</p>
          <div className=' flex'>
            <form action="" className=' flex flex-col w-full'>
              <input type="email" placeholder='Email' className=' p-1 mb-3 mt-5 text-sm w-2/3 self-center rounded' />
              <input type="password" placeholder='Senha' className=' p-1 mb-3 text-sm w-2/3 self-center rounded' />
              <button className=' text-white rounded bg-sky-900 w-14 self-center mt-4'>Login</button>
            </form>
          </div>
        </div>
        <div className=' w-2/5 p-5 text-black'>
          <p className=' text-black text-center text-2xl'>Cadastro</p>
          <div className='flex justify-center flex-col'>
            <form action="" className=' flex flex-col w-full'>
              <input type="text" placeholder='Nome completo' className=' p-1 mt-5 text-sm rounded' />
              <input type="text" placeholder='Telefone' className=' p-1 mt-3 text-sm rounded' />
              <input type="email" placeholder='Email' className=' p-1 mb-3 mt-3 text-sm rounded' />
              <input type="password" placeholder='Senha' className=' p-1 mb-5 text-sm rounded' />
              <button className=' text-white rounded bg-sky-900 w-20 self-center'>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
