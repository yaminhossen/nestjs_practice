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
    createUser( createUserDto: CreateUserDto) {
        // const newUser = {
        //     ...CreateUserDto,
        //     id: Date.now(),
        // };
        this.users.push(createUserDto);
        return createUserDto;
    }
    updateUser(id: number, updateUserDto: UpdateUserDto) {
       this.users = this.users.map((user) =>{
        if(user.id === id){
            return { ...user, ...updateUserDto}
        }
        return user;
       })
       return this.getUser(id);
    }

    removeUser(id: number) {
        const toBeRemoved = this.getUser(id);
        this.users = this.users.filter((user) => user.id !== id);
        return toBeRemoved;
    }


    // findAll() {
    //     return `This action returns all Users`;
    // }

    // findOne(id: number) {
    //     return `This action returns a #${id} User`;
    // }

   

    
}
