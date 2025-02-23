import {
  createSuccessResponse,
  requestLogger,
} from "@ruchernchong/monorepo-shared";
import { Hono } from "hono";

const app = new Hono();

app.use("*", requestLogger);

app.get("/hello", (c) => {
  return c.json(createSuccessResponse("Hello!"));
});

export default app;
