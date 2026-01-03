import { Elysia } from "elysia";

const app = new Elysia()
  .group("/api/v1", (app) => app.get("/health", () => ({ status: "ok" })))
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
