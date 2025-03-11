import { Entity, Enum, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Users } from '@src/users/entities/UsersEntity';
import { Titles } from '@src/titles/entities/TitlesEntity';
import { ReadingStatusEnum } from '@src/common/enums/ReadingStatusEnum';

@Entity()
export class UserTitles {
  @PrimaryKey()
  id: number;

  @ManyToOne(() => Users)
  user: Users;

  @ManyToOne(() => Titles)
  title: Titles;

  @Property({ default: 1 })
  progress: number;

  @Enum({ items: () => ReadingStatusEnum, default: ReadingStatusEnum.READING })
  status: ReadingStatusEnum;

  @Property({ nullable: true })
  rating: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date;
}
