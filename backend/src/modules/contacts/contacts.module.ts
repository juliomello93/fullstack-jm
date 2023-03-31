import { Module } from '@nestjs/common';
import { PrismaService } from "../../database/prisma.service";
import { ContactsController } from './contact.controller';
import { ContactService } from './contact.service';

@Module({
    controllers: [ContactsController],
    providers: [ContactService, PrismaService],
    exports: [ContactService]
})

export class ContactModule { }