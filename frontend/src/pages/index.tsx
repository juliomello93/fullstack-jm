const Home = () => {
  return (
    <div className=" w-1/2 h-full p-6 flex flex-col justify-center m-auto mt-20">
      <h1 className=" text-4xl text-white text-center mb-4">
        Login
      </h1>
      <div className=" flex justify-center flex-col gap-1 content-center">
        <label htmlFor="email" className="text-white text-sm">
          Email
        </label>
        <input id="email" type="email" className="
        rounded-sm 
        bg-slate-500
        m-auto
        w-full
        border
        border-transparent
        focus:outline-none
        focus:border-sky-600   
        "
          placeholder="Digite seu e-mail"

        />
        <label htmlFor="password" className="text-white mt-2 text-sm">
          Senha
        </label>
        <input type="password" placeholder="Digite sua senha" className="
        rounded-sm 
        bg-slate-500
        m-auto
        w-full
        border
        border-transparent
        focus:outline-none
        focus:border-sky-600        
        " />
      </div>
    </div>
  )
}

export default Home
