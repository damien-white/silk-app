import { IsBoolean, IsNotEmpty, IsNumber, IsString, Matches, Max, Min } from 'class-validator';

export class EnvSchema {
  /** Core Settings | API Server */
  @Max(65535)
  @Min(0)
  @IsNumber()
  PORT: number;

  @IsNotEmpty()
  @IsString()
  HOST: string;

  @IsNotEmpty()
  @IsString()
  SECRET_KEY: string;

  /** Redis Server | Cache Manager */
  @IsNotEmpty()
  @IsString()
  REDIS_HOST: string;

  @Max(65535)
  @Min(0)
  @IsNumber()
  REDIS_PORT: number;

  @IsNotEmpty()
  @IsString()
  REDIS_PASSWORD: string;

  @Max(600)
  @Min(1)
  @IsNumber()
  REDIS_CACHE_TTL: number; // Note: 'REDIS_CACHE_TTL' is in seconds

  /** TypeORM | Database Service */
  @Matches(/postgres/)
  TYPEORM_CONNECTION: string;

  @IsBoolean()
  TYPEORM_DROP_SCHEMA: boolean;

  @IsNotEmpty()
  @IsString()
  TYPEORM_ENTITIES: string;

  @IsBoolean()
  TYPEORM_LOGGING: boolean;

  @IsBoolean()
  TYPEORM_SYNCHRONIZE: boolean;

  @IsNotEmpty()
  @IsString()
  TYPEORM_URL: string;

  @Matches(/pgcrypto/)
  TYPEORM_UUID_EXTENSION: string;
}
