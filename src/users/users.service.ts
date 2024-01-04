import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {

    private users = [
        {id:1, name:'usera', gun:'star'},
        {id:2, name:'userb', gun:'muster'}
    ]
    
    getGun(gun?: 'star' | 'muster'){
        if(gun){
            return this.users.filter((user) => user.gun === gun);
        }
        return this.users;
    }

    getUser(id: number){
        const user = this.users.find((user) => user.id === id)
        if(!user){
            throw new Error('user not found')
        }
        return user;
    }
    create(createUserDto: CreateUserDto) {
        return 'This action adds a new User got it';
    }

    findAll() {
        return `This action returns all Users`;
    }

    findOne(id: number) {
        return `This action returns a #${id} User`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} User`;
    }

    remove(id: number) {
        return `This action removes a #${id} User`;
    }
}
