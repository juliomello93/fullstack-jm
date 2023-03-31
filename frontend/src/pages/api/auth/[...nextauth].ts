import { compare } from "bcrypt";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import prismadb from "../../../../lib/prismadb";

export default NextAuth({
    providers: [
        Credentials({
            id: "credentials",
            name: "credentials",
            credentials: {
                username: {
                    label: "username",
                    type: "text",
                },
                password: {
                    label: "password",
                    type: "password",
                }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials.password) {
                    throw new Error("Username and password required")
                }

                const user = await prismadb.user.findUnique({
                    where: {
                        username: credentials.username
                    }
                })

                if (!user || !user.hashedPassword) {
                    throw new Error("Username does not exist")
                }

                const isPassword = await compare(
                    credentials.password,
                    user.hashedPassword
                );

                if (!isPassword) {
                    throw new Error("Incorrect Password")
                }
                return user
            }
        })
    ],
    pages: {
        signIn: "/login",
    },
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt"
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET
})