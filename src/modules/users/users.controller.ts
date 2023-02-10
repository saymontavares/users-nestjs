import { Body, Controller, Post } from "@nestjs/common"

@Controller('users')
export class UsersController {
    private users = []

    @Post('/new')
    public newuser (@Body() user) {
        this.users.push(user)

        return user
    }
}