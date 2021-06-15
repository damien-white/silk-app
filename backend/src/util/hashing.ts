import { InternalServerErrorException } from '@nestjs/common';
import argon2, { argon2id } from 'argon2';

// TODO: Consider converting this class into a service or a simple group of helper functions.

/**
 * Utility functions for hashing data (such as user passwords) and comparing data to existing hashes.
 */
// NOTE: Settings tuned for a maximum execution time of 2 seconds on a server with a single CPU core.
const hasherOptions = {
  memoryCost: 1_048_576,
  parallelism: 2,
  timeCost: 3,
  // `argon2id` was chosen
  type: argon2id,
};

/** Transforms a plaintext Buffer or string type into a hashed string. */
async function hash(plaintext: Buffer | string) {
  try {
    return argon2.hash(plaintext, hasherOptions);
  } catch (error) {
    throw new InternalServerErrorException(error);
  }
}

/** Compares an existing hash against plaintext passed in, returning true on success or else false. */
async function verify(hashedData: Buffer | string, plaintext: string) {
  // Allow both strings and bytes to be passed in. If the data is in bytes, decode to a string with utf-8 encoding.
  const hashDecoded = typeof hashedData === 'string' ? hashedData : hashedData.toString('utf-8');
  return argon2.verify(hashDecoded, plaintext, hasherOptions);
}
