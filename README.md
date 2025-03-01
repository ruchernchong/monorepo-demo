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
pnpm dev           # Run all apps in development mode
```

## Building

```bash
pnpm build           # Build all projects
pnpm build:shared    # Build shared package only
```

## Testing

```bash
pnpm test           # Run all tests in all projects
pnpm test:app-a     # Run all tests in app-a
pnpm test:app-b     # Run all tests in app-b
pnpm test:shared    # Run all tests in shared package
pnpm test:coverage  # Run all tests with coverage
```

## Deployment

```bash
pnpm deploy           # Deploy all applications
pnpm deploy:app-a     # Deploy app-a only
pnpm deploy:app-b     # Deploy app-b only
```

## Linting and Formatting

```bash
pnpm biome check .           # Check code with Biome
pnpm biome format --write .  # Format code with Biome
```