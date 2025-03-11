import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { ReadingStatusEnum } from '@src/common/enums/ReadingStatusEnum';
import { Users } from '@src/users/entities/UsersEntity';
import { Titles } from '@src/titles/entities/TitlesEntity';
import { UserTitles } from '@src/users/entities/UserTitlesEntity';

@Injectable()
export class TitlesService {
  constructor(private readonly em: EntityManager) {}

  async getAllTitles(): Promise<Titles[]> {
    return this.em.find(Titles, {});
  }

  async getTitleById(id: number): Promise<Titles | null> {
    return this.em.findOne(Titles, { id });
  }

  async addUserReading(userId: number, titleId: number): Promise<UserTitles> {
    const user = await this.em.findOne(Users, { id: userId });
    const title = await this.em.findOne(Titles, { id: titleId });

    if (!user || !title) {
      throw new Error('User or Novel not found');
    }

    const readingEntry = new UserTitles();
    readingEntry.user = user;
    readingEntry.title = title;
    readingEntry.progress = 1;
    readingEntry.status = ReadingStatusEnum.READING;

    await this.em.persistAndFlush(readingEntry);
    return readingEntry;
  }
}
