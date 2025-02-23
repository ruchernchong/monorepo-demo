/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "monorepo-app-a",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "cloudflare",
    };
  },
  async run() {
    const { url } = new sst.cloudflare.Worker("monorepo-a", {
      handler: "src/index.ts",
      url: true,
    });

    return { url };
  },
});
