import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TitlesService } from '@src/titles/titles.service';
import { Titles } from '@src/titles/entities/TitlesEntity';
import { UserTitles } from '@src/users/entities/UserTitlesEntity';

@Controller('titles')
export class TitlesController {
  constructor(private readonly titlesService: TitlesService) {}

  @Get()
  async getAllTitles(): Promise<Titles[]> {
    return this.titlesService.getAllTitles();
  }

  @Get(':id')
  async getTitle(@Param('id') id: number): Promise<Titles | null> {
    return this.titlesService.getTitleById(id);
  }

  @Post('/add-reading')
  async addUserReading(
    @Body() body: { userId: number; titleId: number },
  ): Promise<UserTitles> {
    return this.titlesService.addUserReading(body.userId, body.titleId);
  }
}
