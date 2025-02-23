import {
  createSuccessResponse,
  requestLogger,
} from "@ruchernchong/monorepo-shared";
import { Hono } from "hono";

const app = new Hono();

app.use("*", requestLogger);

app.get("/bye", (c) => {
  return c.json(createSuccessResponse("Bye!"));
});

export default app;
