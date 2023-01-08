import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const newUser = await this.userRepository.create(dto)
    return newUser;
  }

  async getUserByEmail(email: string): Promise<User> | undefined {
    const user = await this.userRepository.findOne({
        where: {
            email
        }
    });
    return user;
  }

  async getAllUsers() {
    const userList = await this.userRepository.findAll();
    return userList;
  }

  async activateUser() {}

  async deactivateUser() {}

  async verifyUser() {}
}
