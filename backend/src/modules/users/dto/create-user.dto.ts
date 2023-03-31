import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string

    @IsString()
    username: string

    @IsEmail()
    @IsNotEmpty()
    @MinLength(8)
    @Transform(({ value }: { value: string }) => hashSync(value, 10), {
        groups: ["transform"]
    })
    password: string

    @IsString()
    phone: string
}