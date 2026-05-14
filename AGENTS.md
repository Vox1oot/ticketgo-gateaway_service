# TicketGO Gateway Service

NestJS 11 API gateway (TypeScript, ES2023, `nodenext` modules).

## Commands

```bash
yarn install            # package manager is yarn
yarn start:dev          # dev server with watch
yarn build              # compile via nest build
yarn lint               # eslint (auto-fix)
yarn test               # unit tests (jest, rootDir: src)
```

No typecheck script — `yarn build` is the typecheck gate.

## Architecture

- **Entry**: `src/main.ts` → `src/module/app.module.ts`
- **Config**: `src/config/` — app settings, CORS, Swagger, validation pipe. Uses `@nestjs/config` (global module, reads `.env` via `forRoot()`).
- **Modules**: `src/module/` — feature modules (`auth`, `health`). Each is a standalone NestJS module.
- **Shared**: `src/shared/` — cross-cutting concerns (validators, etc.)
- **`@ticketgo/core`**: shared dev dependency providing prettier config (imported in `prettier.config.mjs`).

## Required env vars

`HTTP_PORT`, `HTTP_HOST`, `HTTP_CORS` (comma-separated origins). All loaded via `getOrThrow`.

## Key conventions

- Validation pipe: `transform: true`, `whitelist: true` — unknown properties are stripped automatically.
- Swagger UI at `/api/docs`, OpenAPI YAML at `/openapi.yaml`.
- ESLint uses flat config (`eslint.config.mjs`) with `projectService: true` (type-aware linting). Prettier runs as ESLint rule with `endOfLine: 'auto'`.
- `@typescript-eslint/no-explicit-any` is off; `no-unsafe-call` is off.
- No `strict` mode in tsconfig — `strictNullChecks: true`, `noImplicitAny: false`.
- DTOs use `class-validator` + `@ApiProperty()` decorators.
