import {
    Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors
} from '@nestjs/common';
import { JwtGuard } from '../auth/jwt.guard';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService: ContactService) { }

    @Post()
    @UseInterceptors(ClassSerializerInterceptor)
    create(@Body() createContactDto: CreateContactDto, id: string) {
        return this.contactsService.create(createContactDto, id);
    }

    @Get()
    @UseGuards(JwtGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    findAllContactsByUser(id: string) {
        return this.contactsService.findAllContactsByUser(id)
    }

    @Patch()
    @UseGuards(JwtGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
        return this.contactsService.update(id, updateContactDto);
    }

    @Delete(':id')
    @UseGuards(JwtGuard)
    remove(@Param('id') id: string) {
        return this.contactsService.delete(id);
    }
}