import { db } from "../database";
import { users } from "../database/schema";
import { eq } from "drizzle-orm";
import type { CreateUserInput, UpdateUserInput, User } from "../types";

export const userService = {
  async create(data: CreateUserInput): Promise<User> {
    const [newUser] = await db.insert(users).values(data).returning();
    return newUser;
  },
};
