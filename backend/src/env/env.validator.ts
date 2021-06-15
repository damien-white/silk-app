import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';
import { EnvSchema } from './env.schema';

export function envValidator(configSchema: Record<string, unknown>): EnvSchema {
  const validatedEnv = plainToClass(EnvSchema, configSchema, {
    enableImplicitConversion: true,
  });
  const validationErrors = validateSync(validatedEnv, {
    skipMissingProperties: false,
  });

  if (validationErrors.length > 0) {
    throw new Error(validationErrors.toString());
  }

  return validatedEnv;
}
