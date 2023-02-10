import { Body, Controller, Get, Post } from "@nestjs/common"
import { v4 as uuidv4 } from 'uuid'

@Controller('users')
export class UsersController {
    private users = []

    @Post('/new')
    public newuser (@Body() user) {
        user.id = uuidv4()
        this.users.push(user)

        return user
    }

    @Get('all')
    public getAll () {
        return this.users
    }
}