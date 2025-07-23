# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev:app-a` - Run app-a in development mode (SST dev)
- `pnpm dev:app-b` - Run app-b in development mode (SST dev)
- `pnpm dev` - Run all apps in development mode (with parallel execution)

### Testing
- `pnpm test` - Run all tests in all projects
- `pnpm test:app-a` - Run all tests in app-a
- `pnpm test:app-b` - Run all tests in app-b
- `pnpm test:shared` - Run all tests in shared package
- `pnpm test:coverage` - Run all tests with coverage
- Run a single test: `cd apps/app-a && pnpm test src/path/to/file.test.ts`
- Watch mode: `cd apps/app-a && pnpm test:watch src/path/to/file.test.ts`
- Coverage for specific app: `cd apps/app-a && pnpm test:coverage`

### Deployment
- `pnpm deploy` - Deploy all applications to production
- `pnpm deploy:app-a` - Deploy app-a only
- `pnpm deploy:app-b` - Deploy app-b only

### Linting/Formatting
- `pnpm biome check .` - Check code with Biome
- `pnpm biome format --write .` - Format code with Biome

## Architecture Overview

This is a pnpm-based monorepo using SST (Serverless Stack) for Cloudflare Workers deployment:

### Project Structure
- **`apps/`** - Contains serverless applications (app-a, app-b)
  - Each app uses SST with Cloudflare Workers runtime
  - Built with Hono web framework
  - Individual `sst.config.ts` for deployment configuration
- **`packages/shared/`** - Shared utilities and middleware
  - Hono middleware (request logging)
  - Response helpers with standardized API format
  - Used across all apps via workspace dependencies

### Key Technologies
- **SST v3** - Serverless deployment platform targeting Cloudflare
- **Hono** - Lightweight web framework for serverless environments
- **Vitest** - Testing framework with coverage support
- **Biome** - Linting and formatting tool
- **TypeScript** - Strong typing throughout the project

### Shared Package Architecture
The `@ruchernchong/monorepo-shared` package provides:
- `requestLogger` middleware for consistent logging across apps
- `ApiResponse<T>` interface for standardized API responses
- `createSuccessResponse()` and `createErrorResponse()` helpers

### Deployment Model
- Apps are deployed as Cloudflare Workers via SST
- Development uses `sst dev` for local testing with live reload
- Production deployments use `sst deploy --stage prod`
- Each app has independent deployment configuration

## Code Style Guidelines
- **Formatting**: Use spaces for indentation, double quotes for strings
- **Imports**: Organize imports with Biome
- **Types**: Use strong typing with TypeScript (avoid `any`)
- **Naming**: camelCase for variables/functions, PascalCase for classes/interfaces
- **Error Handling**: Use typed error handling where possible
- **Project Structure**: Apps in `apps/`, shared code in `packages/`