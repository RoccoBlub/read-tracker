import {Collection, Entity, OneToMany, PrimaryKey, Property,} from '@mikro-orm/core';
import {UserTitles} from '@src/users/entities/UserTitlesEntity';

@Entity()
export class Users {
    @PrimaryKey()
    id: number;

    @Property()
    email: string;

    @Property()
    name: string;

    @Property()
    profilePicture: string;

    @OneToMany(() => UserTitles, (userTitles) => userTitles.user)
    titles = new Collection<UserTitles>(this);

    @Property()
    createdAt = new Date();

    @Property({onUpdate: () => new Date()})
    updatedAt = new Date();
}
