import { Elysia, t } from "elysia";
import { userService } from "../services/user.service";

export const userRoute = new Elysia({ prefix: "/user" })
  .post(
    "/",
    async ({ body, set }) => {
      try {
        return userService.create(body);
      } catch (err) {
        set.status = 500;
        return { error: "Failed to create user" };
      }
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
