import {
    BadRequestException,
    ConflictException,
    Injectable, NotFoundException
} from '@nestjs/common';
import { PrismaService } from "../../database/prisma.service";
import { CreateContactDto } from "../contacts/dto/create-contact.dto";
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactRepository } from './repositories/contact.repository';

@Injectable()
export class ContactService {
    constructor(private prisma: PrismaService, private contactRepository: ContactRepository) { }


    async create({ email }: CreateContactDto, id: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        if (user.id === id) {
            throw new BadRequestException('Cannot add own user');
        }

        const contactExists = await this.prisma.contacts.findFirst({
            where: {
                id: user.id,
            },
        });

        if (contactExists) {
            throw new ConflictException('Contact already exists');
        }

        await this.prisma.contacts.create({
            data: {
                userId: id,
                contactId: user.id,
                contactName: user.name,
                contactEmail: user.email,
                contactPhone: user.phone
            },
        });

        return {
            message: `${user.username} has been added to contact list`,
        };
    };

    async findAllContactsByUser(id: string) {
        const contact = await this.prisma.user.findUnique({
            where: {
                id,
            },
            include: {
                contacts: true,
            },
        });
        return { ...contact, password: undefined };
    }

    async findOne(id: string, userId: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: { contacts: true },
        });

        if (!user.contacts.find((friend) => friend.contactId === id)) {
            throw new NotFoundException(
                "Contact not found or the user's not your friend",
            );
        }

        const contact = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });

        return { ...contact, password: undefined };
    }

    async remove(id: string, userId: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: { contacts: true },
        });

        const friend = await this.prisma.contacts.findFirst({
            where: {
                contactId: id,
            },
        });

        if (!friend || !user.contacts.find((friend) => friend.contactId === id)) {
            throw new NotFoundException(
                "Friend not found or the user's not your friend",
            );
        }

        await this.prisma.contacts.delete({
            where: {
                id: friend.id,
            },
        });

        return true;
    }

    async update(id: string, updateContactDto: UpdateContactDto) {
        const findContact = await this.contactRepository.findOne(id);
        if (!findContact) {
            throw new NotFoundException("Contact not found");
        }
        return this.contactRepository.update(id, UpdateContactDto);
    }

    async delete(id: string) {
        const findUser = await this.contactRepository.findOne(id);
        if (!findUser) {
            throw new NotFoundException("User not found");
        }
        return this.contactRepository.delete(id);
    }
}




