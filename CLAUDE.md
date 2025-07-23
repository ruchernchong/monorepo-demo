# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev:app-a` - Run app-a in development mode
- `pnpm dev:app-b` - Run app-b in development mode
- `pnpm dev` - Run all apps in development mode (with parallel execution)

### Deployment
- `pnpm deploy:app-a` - Deploy app-a to production (Cloudflare Workers)
- `pnpm deploy:app-b` - Deploy app-b to production (Cloudflare Workers)
- `pnpm deploy` - Deploy all applications

### Testing
- `pnpm test` - Run all tests in all projects
- `pnpm test:app-a` - Run all tests in app-a
- `pnpm test:app-b` - Run all tests in app-b
- `pnpm test:shared` - Run all tests in shared package
- `pnpm test:coverage` - Run all tests with coverage
- Run a single test: `cd apps/app-a && pnpm test src/path/to/file.test.ts`
- Watch mode: `cd apps/app-a && pnpm test:watch src/path/to/file.test.ts`
- Coverage for specific app: `cd apps/app-a && pnpm test:coverage`

### Linting/Formatting
- `pnpm biome check .` - Check code with Biome
- `pnpm biome format --write .` - Format code with Biome

## Architecture

### Project Structure
- **Monorepo**: Uses pnpm workspaces with packages defined in `pnpm-workspace.yaml`
- **Apps** (`apps/`): Two serverless applications (app-a, app-b) deployed to Cloudflare Workers via SST
- **Shared Package** (`packages/shared/`): Contains reusable utilities, middleware, and response handlers

### Technology Stack
- **Runtime**: Cloudflare Workers (serverless)
- **Framework**: Hono for HTTP server functionality
- **Infrastructure**: SST (Serverless Stack) for deployment and configuration
- **Testing**: Vitest with coverage support
- **Formatting/Linting**: Biome (configured for spaces, double quotes)
- **Package Manager**: pnpm with workspace support

### Key Components
- **Shared Package**: Exports `createSuccessResponse`, `createErrorResponse`, and `requestLogger` middleware
- **Path Aliases**: Configured in `tsconfig.json` with `@shared/*`, `@app-a/*`, `@app-b/*` mappings
- **SST Configuration**: Each app has its own `sst.config.ts` defining Cloudflare Worker deployment

## Code Style Guidelines
- **Formatting**: Use spaces for indentation, double quotes for strings
- **Imports**: Organize imports with Biome
- **Types**: Use strong typing with TypeScript (avoid `any`)
- **Naming**: camelCase for variables/functions, PascalCase for classes/interfaces
- **Error Handling**: Use typed error handling where possible
- **Project Structure**: Apps in `apps/`, shared code in `packages/`