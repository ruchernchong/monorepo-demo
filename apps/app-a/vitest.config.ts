import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@app-a": resolve(__dirname, "./src")
    }
  },
  test: {
    globals: true,
    coverage: {
      provider: "v8",
      include: ["src/**/*.ts"],
    },
    include: ["tests/**/*.test.ts"],
  },
});
