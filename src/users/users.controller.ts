import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
 

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // get all users /users
    @Get()
    getUsers(@Query('gun') gun:'star' | 'muster') {
        return this.usersService.getGun(gun);
    }

    // get all users /users
    // @Get()
    // getUsers(){
    //     return [
    //       'dljsfjdlsk'
    //     ];
    // }

    // get single user /users/:id
    @Get(":id")
    getOneNinja(@Param('id') id:number) {
        return this.usersService.getUser(id);
    }

    // post /users
    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return  this.usersService.create(createUserDto);
    }

    
    // update /users/:id
    // @Put()
    // updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //     return this.usersService.update(+id, updateUserDto);
    // }


    // delete /users/:id
    @Delete()
    removeUser(){
        return {}
    }
}

