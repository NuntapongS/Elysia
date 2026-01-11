import { Elysia, t } from "elysia";
import { userHandler } from "../handlers/user.handler";

export const userRoute = new Elysia({ prefix: "/user" })
  .post(
    "/",
    async ({ body, set }) => {
      return await userHandler.create(body, (status) => {
        set.status = status;
      });
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String({ format: "email" }),
      }),
    }
  )
  .get("/", async () => {
    return await userHandler.getAll();
  })

  .get("/:id", async ({ params, set }) => {
    return await userHandler.getUserById(params.id, (status) => {
      set.status = status;
    });
  });
