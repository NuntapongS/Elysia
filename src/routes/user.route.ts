import { Elysia, t } from "elysia";
import { userService } from "../services/user.service";

export const userRoute = new Elysia({ prefix: "/user" })
  .post(
    "/",
    async ({ body }) => {
      return userService.create(body);
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String({ format: "email" }),
      }),
    }
  )
  .get("/", async () => {
    return userService.getAll();
  });
