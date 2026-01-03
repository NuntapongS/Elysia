import { db } from "../database";
import { users } from "../database/schema";
import type { CreateUserInput, UserOutput, User } from "../types";

export const userService = {
  async create(data: CreateUserInput): Promise<UserOutput> {
    const [newUser] = await db.insert(users).values(data).returning();
    return { id: newUser.id };
  },

  async getAll(): Promise<User[]> {
    return db.select().from(users);
  },
};
