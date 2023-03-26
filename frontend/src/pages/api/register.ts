import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from "../../../lib/prismadb";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }

    try {
        const { name, username, email, password } = req.body;
        const userExists = await prismadb.user.findUnique({
            where: {
                email,
            }
        })

        if (userExists) {
            return res.status(404).json({ error: "Email already taken" })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = await prismadb.user.create({
            data: {
                name,
                username,
                email,
                hashedPassword,
            }
        })

        return res.status(200).json(user)

    } catch (error) {
        console.log(error)
        return res.status(400).end()
    }
}