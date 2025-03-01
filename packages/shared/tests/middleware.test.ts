import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { requestLogger } from "@shared/middleware";

describe("middleware", () => {
  describe("requestLogger", () => {
    const mockContext = {
      req: {
        method: "GET",
        url: "https://example.com/test",
      },
    };

    const mockNext = vi.fn();

    beforeEach(() => {
      vi.spyOn(console, "log").mockImplementation(() => {});
      vi.useFakeTimers();
      vi.setSystemTime(new Date("2023-01-01T12:00:00Z"));
    });

    afterEach(() => {
      vi.restoreAllMocks();
      vi.useRealTimers();
    });

    it("should log request information and call next", async () => {
      await requestLogger(mockContext as any, mockNext);

      expect(console.log).toHaveBeenCalledWith(
        "[2023-01-01T12:00:00.000Z] GET https://example.com/test",
      );
      expect(mockNext).toHaveBeenCalledTimes(1);
    });
  });
});
