import { HttpException, Injectable } from '@nestjs/common';
import { loginAuthDto } from './dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/interfaces/users.interfaces';
import { compare } from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel('User') private readonly model: Model<User>,
        private jtwService: JwtService
    ){}


    async login(registerAuth: loginAuthDto) {
        const {emailAddress, password} = registerAuth
        const getUser = await this.model.findOne({emailAddress})
        if(!getUser) throw new HttpException('USER_NOT_FOUND', 404);

        const checkPassword = await compare(password, getUser.password);
        if(!checkPassword) throw new HttpException('PASSWORD_INVALID', 404);

        const payload = {id: getUser._id, username: getUser.username};
        const token = await this.jtwService.sign(payload);

        const data = {
            user: getUser,
            token
        }

        return data
    }
}
