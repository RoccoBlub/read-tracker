import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UsersService } from '@src/users/users.service';
import { UsersController } from '@src/users/users.controller';
import { Users } from '@src/users/entities/UsersEntity';
import { UserTitles } from '@src/users/entities/UserTitlesEntity';

@Module({
  imports: [MikroOrmModule.forFeature([Users, UserTitles])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
