import { describe, it, expect } from "vitest";
import { createSuccessResponse, createErrorResponse } from "./responses";

describe("responses", () => {
  describe("createSuccessResponse", () => {
    it("should create a success response with provided data", () => {
      const data = { name: "test" };
      const response = createSuccessResponse(data);

      expect(response).toEqual({
        success: true,
        data,
      });
    });

    it("should work with primitive data types", () => {
      expect(createSuccessResponse("test")).toEqual({
        success: true,
        data: "test",
      });

      expect(createSuccessResponse(123)).toEqual({
        success: true,
        data: 123,
      });
    });
  });

  describe("createErrorResponse", () => {
    it("should create an error response with provided error message", () => {
      const errorMessage = "Something went wrong";
      const response = createErrorResponse(errorMessage);

      expect(response).toEqual({
        success: false,
        error: errorMessage,
      });
    });
  });
});
