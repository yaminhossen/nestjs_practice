import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
    // get all users /users
    @Get()
    getUsers() {
        return ["ljsdfl"];
    }

    // get single user /users/:id
    @Get(":id")
    getOneNinja(@Param('id') id:string) {
        return {
            id
        };
    }

    // post /users
    @Post()
    createUser(){
        return {}
    }

    
    // update /users/:id
    @Put()
    UpdateUser(){
        return {}
    }


    // delete /users/:id
    @Delete()
    removeUser(){
        return {}
    }
}

