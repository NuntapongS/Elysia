import { Elysia, t } from "elysia";
import { userHandler } from "../handlers/user.handler";

export const userRoute = new Elysia({ prefix: "/user" })
  .post(
    "/",
    async ({ body }) => {
      return await userHandler.create(body);
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

  .get("/:id", async ({ params }) => {
    return await userHandler.getById(params.id);
  });
