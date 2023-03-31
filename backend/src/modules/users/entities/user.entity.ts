import { Exclude } from "class-transformer"
import { randomUUID } from "crypto"


export class User {
    readonly id: string
    name: string
    username: string
    email: string
    phone: string
    createdAt: Date
    updatedAt: Date

    @Exclude()
    password: string


    constructor() {
        this.id = randomUUID()
    }
}
