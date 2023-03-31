
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateContactDto {
    @IsString()
    userId: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string

    @IsString()
    phone: string
}


//id        String   @id @default(auto()) @map("_id") @db.ObjectId
// userId    String   @db.ObjectId
// name      String
// email     String
// phone     String
// createdAt DateTime @default(now())
// updatedAt DateTime @updatedAt
// user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

// @@unique([email, phone])
// @@map("contacts")