import { Contacts } from "@prisma/client";
import { randomUUID } from "crypto";

export class Contact implements Contacts {
    readonly id: string
    userId: string
    contactId: string
    contactEmail: string
    contactPhone: string
    contactName: string
    createdAt: Date
    updatedAt: Date

    constructor() {
        this.id = randomUUID()
    }
}