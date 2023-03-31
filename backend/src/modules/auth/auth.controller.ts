import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './local.guard';

interface iUserLogin {
  email: string
  password: string
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("/login")
  @UseGuards(LocalGuard)
  async login(@Body() user: iUserLogin) {
    return this.authService.login(user.email)
  }
}
