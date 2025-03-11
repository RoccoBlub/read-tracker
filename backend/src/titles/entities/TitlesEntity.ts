import {
  Collection,
  Entity,
  Enum,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { TitleTypeEnum } from '@src/common/enums/TitleTypeEnum';
import { TitleStatusEnum } from '@src/common/enums/TitleStatusEnum';
import { UserTitles } from '@src/users/entities/UserTitlesEntity';

@Entity()
export class Titles {
  @PrimaryKey()
  id: number;

  @Property({ unique: true })
  title: string;

  @Enum({ items: () => TitleTypeEnum, default: TitleTypeEnum.OTHER })
  type: TitleTypeEnum;

  @Property({ nullable: true })
  coverImage: string;

  @Property({ default: 'Unknown' })
  author: string;

  @Enum({ items: () => TitleStatusEnum, default: TitleStatusEnum.ONGOING })
  status: TitleStatusEnum;

  @Property({ nullable: true })
  genres: string[];

  @Property({ type: 'text', nullable: true })
  synopsis: string;

  @Property({ default: 1 })
  chapters: number;

  @Property({ nullable: true })
  volumes: number;

  @OneToMany(() => UserTitles, (userTitles) => userTitles.title)
  usersReading = new Collection<UserTitles>(this);

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date;
}
