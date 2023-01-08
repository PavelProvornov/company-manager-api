import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { genSalt, hashSync } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async login(authDto: AuthDto) {
        console.log('login');
    }
 
    async register(authDto: AuthDto) {
        const oldUserWithEmail = await this.userService.getUserByEmail(authDto.email);
        if (oldUserWithEmail) {
            throw new BadRequestException('Пользователь с таким Email уже существует!');
        }
        const salt = await genSalt(10);
        const newUser = await this.userService.createUser({
            email: authDto.email,
            passwordHash: hashSync(authDto.password, salt)
        })
        return newUser;
    } 
}