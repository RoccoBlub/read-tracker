import {Injectable} from '@nestjs/common';
import {EntityManager} from '@mikro-orm/core';
import {Users} from './entities/UsersEntity';

@Injectable()
export class UsersService {
    constructor(private readonly em: EntityManager) {
    }

    async getAllUsers(): Promise<Users[]> {
        return this.em.find(Users, {});
    }

    async getUserById(id: number): Promise<Users | null> {
        return this.em.findOne(Users, {id});
    }

    async findByEmail(email: string): Promise<Users | null> {
        return this.em.findOne(Users, {email});
    }

    async createUser(email: string, name: string, picture: string): Promise<Users> {
        const user = new Users();
        user.email = email;
        user.name = name;
        user.profilePicture = picture;

        await this.em.persistAndFlush(user);
        return user;
    }
}
