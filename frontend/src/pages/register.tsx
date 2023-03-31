import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';


const Register = () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await axios.post("/api/register", {
                name,
                username,
                email,
                password
            })
            router.push("/login")

        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-8 space-y-6 bg-slate-400 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-center">Cadastro</h2>
                <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label htmlFor="username" className="block mb-2 font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
                        Senha
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    />
                </div>
                <div>
                    <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 mt-4">
                        Registrar
                    </button>
                </div>

                <div className='flex flex-row items-center justify-center'>
                    <p className=''>Já é Registrado?</p>
                    <button onClick={() => router.push("/login")} className='ml-1 text cursor-pointer underline'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Register
