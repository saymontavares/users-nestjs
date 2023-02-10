import { Module } from '@nestjs/common'
import { UsersController } from './modules/users/users.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}