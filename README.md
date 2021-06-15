# Silk

## System Architecture and Design

### Specification:
__Server and Back End__
- Runtime / Language
  - Node.js with JavaScript and/or TypeScript
- High-performance server-side framework
  - [ ] Fastify (low overhead, little to no support for TypeScript)
  - [X] Nest.js (Many otb features, full TypeScript support, "heavier" / strict framework)
  - [ ] Express.js (minimalistic; good performance; large community; no support for async/await)
  - [ ] Koa.js (support for async/await; minimalistic; smaller community)
- Features
  - Middleware or plugin system
  - Ease of handling external and internal data sources
  - Flexible and/or powerful Configuration Manager
- Security
  - Validation, Sanitization and Parsing (JSON schema, TypeScript types)
  - Hashing, Encryption, etc.
- WebSocket support
- Caching
  - Redis
  - Memcached
- Persistence
  - PostgreSQL

__Web Client__:
- Framework / Library
1. Vue
2. React
3. No framework ("vanilla" or "plain" javascript)
- with JavaScript
