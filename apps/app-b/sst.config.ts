/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "monorepo-app-b",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "cloudflare",
    };
  },
  async run() {
    const { url } = new sst.cloudflare.Worker("monorepo-b", {
      handler: "src/index.ts",
      url: true,
    });

    return { url };
  },
});
