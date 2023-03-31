import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from "../dto/create-contact.dto";

export class UpdateContactDto extends PartialType(CreateContactDto) { }