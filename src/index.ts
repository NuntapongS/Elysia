import { Elysia } from "elysia";
import { userRoute } from "./routes/user.route";
import { config } from "./config";

const app = new Elysia()
  .use(userRoute)
  .group("/api/v1", (app) => app.get("/health", () => ({ status: "ok" })))
  .listen(config.server.port);

console.log(
  `🦊 Elysia is running at http://${config.server.hostname}:${config.server.port}`
);
