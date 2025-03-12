import {Module, OnModuleInit} from '@nestjs/common';
import {MikroOrmModule} from '@mikro-orm/nestjs';
import {MikroORM, PostgreSqlDriver} from '@mikro-orm/postgresql';
import {UsersModule} from '@src/users/users.module';
import 'dotenv/config';
import {TitlesModule} from '@src/titles/titles.module';
import {AuthModule} from "@src/auth/auth.module";

@Module({
    imports: [
        MikroOrmModule.forRoot({
            autoLoadEntities: true,
            dbName: process.env.DB_NAME,
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            debug: true,
            driver: PostgreSqlDriver,
        }),
        UsersModule,
        TitlesModule,
        AuthModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule implements OnModuleInit {
    constructor(private readonly orm: MikroORM) {
    }

    async onModuleInit(): Promise<void> {
        await this.orm
            .getSchemaGenerator()
            .updateSchema({dropTables: false, safe: true});
    }
}
