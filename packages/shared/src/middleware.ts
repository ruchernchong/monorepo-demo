import type { MiddlewareHandler } from "hono";

export const requestLogger: MiddlewareHandler = async (context, next) => {
  console.log(
    `[${new Date().toISOString()}] ${context.req.method} ${context.req.url}`,
  );
  await next();
};
