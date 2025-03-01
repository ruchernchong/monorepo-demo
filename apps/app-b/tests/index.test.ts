import { describe, it, expect } from "vitest";
import app from "@app-b/index";

describe("app-b", () => {
  describe("GET /bye", () => {
    it('should return successful response with "Bye!" message', async () => {
      const res = await app.request("/bye");
      expect(res.status).toBe(200);

      const json = await res.json();
      expect(json).toEqual({
        success: true,
        data: "Bye!",
      });
    });
  });
});
