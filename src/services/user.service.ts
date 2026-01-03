import { db } from "../database";
import { users } from "../database/schema";
import type { CreateUserInput, User } from "../types";

export const userService = {
  async create(data: CreateUserInput): Promise<User> {
    const [newUser] = await db.insert(users).values(data).returning();
    return newUser;
  },

  async getAll(): Promise<User[]> {
    return db.select().from(users);
  },
};
