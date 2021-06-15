import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { KeyOfType, SafePrimitive } from '../common/types';
import { EnvSchema } from './env.schema';

// TODO: Implement and build out this service
@Injectable()
export class EnvService {
  constructor(private readonly configService: ConfigService<EnvSchema>) {}

  /**
   * Retrieves a value that matches the given environment variable key. This replaces the
   * `ConfigService.get<T>()` method and should be used in place of it.
   * TODO: Replace `ConfigModule` with a typesafe-at-runtime `EnvModule`
   * @param key
   */
  getValue<T extends SafePrimitive = SafePrimitive>(key: KeyOfType<EnvSchema, T>) {
    const value = this.configService.get<T>(key);
    if (typeof value === 'undefined' || value === null) {
      throw new TypeError(`Expected type 'string', 'number' or 'boolean', got: ${typeof value}`);
    }

    /* TODO: Create typesafe accessor for config service.
     * Details: Implementation will use type guards and a `parseType` || `coerceType` function.
     * This should allow us to access properties from the validated EnvSchema class and eliminate
     * potentially undefined values since the values will undergo runtime type validation.
     */
    // FIXME: Implement above typesafe accessor
    // if (typeof value === 'string') {
    //   return this.configService.get<string>(key) as string;
    // } else if (typeof value === 'number') {
    //   return this.configService.get<number>(key) as number;
    // }
  }
}
