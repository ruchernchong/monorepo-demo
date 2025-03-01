# CLAUDE.md - Monorepo Development Guide

## Commands

### Development
- `pnpm dev:app-a` - Run app-a in development mode
- `pnpm dev:app-b` - Run app-b in development mode
- `pnpm dev:all` - Run all apps in development mode

### Testing
- `pnpm test:app-a` - Run all tests in app-a (`cd apps/app-a && pnpm test`)
- Run a single test: `cd apps/app-a && pnpm test src/path/to/file.test.ts`
- Watch mode: `cd apps/app-a && pnpm test:watch src/path/to/file.test.ts`
- Coverage: `cd apps/app-a && pnpm test:coverage`

### Linting/Formatting
- `pnpm biome check .` - Check code with Biome
- `pnpm biome format --write .` - Format code with Biome

## Code Style Guidelines
- **Formatting**: Use spaces for indentation, double quotes for strings
- **Imports**: Organize imports with Biome
- **Types**: Use strong typing with TypeScript (avoid `any`)
- **Naming**: camelCase for variables/functions, PascalCase for classes/interfaces
- **Error Handling**: Use typed error handling where possible
- **Project Structure**: Apps in `apps/`, shared code in `packages/`