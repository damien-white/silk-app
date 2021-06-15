import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envValidator } from './env/env.validator';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      envFilePath: ['.env.development.local', '.env.local', '.env'],
      expandVariables: true,
      validate: envValidator,
    }),
    TypeOrmModule.forRoot(),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
