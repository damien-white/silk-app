import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvSchema } from './env/env.schema';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);

  const config: ConfigService<EnvSchema> = app.get<ConfigService>(ConfigService);
  const environment: string = process.env.NODE_ENV ?? 'development';
  const port: number = config.get<number>('PORT', 4040);
  const host: string = config.get<string>('HOST', 'localhost');

  await app.listen(port, host, () => {
    Logger.log(`Server started. Running in "${environment}" mode.`, 'Bootstrap');
    Logger.log(`Listening at: http://${host}:${port}`, 'Bootstrap');
  });
}

bootstrap().catch((error) => {
  Logger.error(error, 'main.ts', 'Bootstrap');
  process.exit(1);
});
