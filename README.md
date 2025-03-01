# Monorepo Demo

This is a monorepo project containing multiple applications and shared packages.

## Project Structure

- `apps/` - Contains all applications
  - `app-a/` - Application A
  - `app-b/` - Application B
- `packages/` - Contains shared packages
  - `shared/` - Shared utilities, middleware, and response handlers

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development servers
pnpm dev:app-a     # Run app-a in development mode
pnpm dev:app-b     # Run app-b in development mode
pnpm dev:all       # Run all apps in development mode
```

## Testing

```bash
pnpm test           # Run all tests in all projects
pnpm test:app-a     # Run all tests in app-a
pnpm test:app-b     # Run all tests in app-b
pnpm test:shared    # Run all tests in shared package
pnpm test:coverage  # Run all tests with coverage
```

Each project uses Vitest for testing. To run tests for a specific file:

```bash
cd apps/app-a && pnpm test src/path/to/file.test.ts
cd apps/app-a && pnpm test:watch src/path/to/file.test.ts    # Watch mode
```

## Linting and Formatting

```bash
pnpm biome check .           # Check code with Biome
pnpm biome format --write .  # Format code with Biome
```