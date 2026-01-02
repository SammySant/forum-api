import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Prisma, User as UserModel } from 'generated/prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    @Inject()
    private readonly userService: UserService;

    @Post('signup')
    async signupUser(
        @Body() userData: Prisma.UserCreateInput,
    ): Promise<UserModel> {
        return this.userService.createUser(userData);
    }
}
