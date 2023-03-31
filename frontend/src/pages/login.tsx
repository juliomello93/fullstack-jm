import { signIn } from "next-auth/react";
import { useRouter } from 'next/router';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await signIn("credentials", {
                username,
                password,
                redirect: false,
                callbackUrl: "/"
            })
            router.push("/dashboard")

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-full max-w-md p-8 space-y-6 bg-slate-400 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-semibold text-center">Login</h2>
                <div className="mb-5">
                    <label htmlFor="username" className="block mb-2 font-medium text-gray-700">
                        Nome de Usuário
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
                        Senha
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4 w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
                >
                    Entrar
                </button>

                <div className='flex flex-row items-center justify-center'>
                    <p className=''>Ainda não é registrado ?</p>
                    <button onClick={() => router.push("/register")} className='ml-1 text cursor-pointer underline'>Cadastro</button>
                </div>
            </form>
        </div>
    );
}

export default Login