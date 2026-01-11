import { db } from "../database";
import { users } from "../database/schema";
import { eq } from "drizzle-orm";
import type { CreateUserInput, UserOutput, User } from "../types";

export const userService = {
  async create(data: CreateUserInput): Promise<UserOutput> {
    const [newUser] = await db.insert(users).values(data).returning();
    return { id: newUser.id };
  },

  async getAll(): Promise<User[]> {
    return db.select().from(users);
  },

  async getUserById(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  },
};
