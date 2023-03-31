import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { compare } from 'bcryptjs';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) { }

    async validateUser(userEmail: string, userPassword: string) {
        const user = await this.userService.findByEmail(userEmail)

        if (user) {
            const validPassword = await compare(userPassword, user.password)

            if (validPassword) {
                const { id, name, username, phone, createdAt, updatedAt } = user
                return { id, name, username, phone, createdAt, updatedAt }
            }
        }
        return null
    }

    async login(email: string) {
        const user = await this.userService.findByEmail(email)

        return {
            token: this.jwtService.sign({ email }, { subject: user.id })
        }
    }
}
