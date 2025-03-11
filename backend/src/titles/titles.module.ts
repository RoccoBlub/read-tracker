import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TitlesService } from '@src/titles/titles.service';
import { TitlesController } from '@src/titles/titles.controller';
import { Titles } from '@src/titles/entities/TitlesEntity';

@Module({
  imports: [MikroOrmModule.forFeature([Titles])],
  providers: [TitlesService],
  controllers: [TitlesController],
  exports: [TitlesService],
})
export class TitlesModule {}
