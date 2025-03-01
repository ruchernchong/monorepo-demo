import { describe, it, expect, vi } from "vitest";
import { Hono } from "hono";
import app from "./index";

describe("app-a", () => {
  describe("GET /hello", () => {
    it('should return successful response with "Hello!" message', async () => {
      const res = await app.request("/hello");
      expect(res.status).toBe(200);

      const json = await res.json();
      expect(json).toEqual({
        success: true,
        data: "Hello!",
      });
    });
  });
});
