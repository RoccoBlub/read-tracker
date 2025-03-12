import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {apiReference} from '@scalar/nestjs-api-reference';
import {AppModule} from '@src/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: 'http://localhost:4000',
        credentials: true,
    });

    const config = new DocumentBuilder()
        .setTitle('My API')
        .setDescription('API documentation')
        .setVersion('1.0')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    const swaggerConfig: any = {
        spec: {
            type: 'url',
            url: '/api-json',
        },
        metaData: {
            title: 'Novel Tracker API',
        },
        darkMode: true,
        hideDarkModeToggle: true,
    };

    app.use('/docs', apiReference(swaggerConfig));

    await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch((err) => {
    console.error(err);
});
