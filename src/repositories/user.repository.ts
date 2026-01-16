import { db } from "../database";
import { users } from "../database/schema";
import { eq } from "drizzle-orm";
import type { User, CreateUserInput } from "../types";

export const userRepository = {
  async create(data: CreateUserInput): Promise<User> {
    const [newUser] = await db.insert(users).values(data).returning();
    return newUser;
  },

  async getAll(): Promise<User[]> {
    return db.select().from(users);
  },

  async getById(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  },

  async update(
    id: string,
    data: Partial<CreateUserInput>
  ): Promise<User | undefined> {
    const [updatedUser] = await db
      .update(users)
      .set(data)
      .where(eq(users.id, id))
      .returning();
    return updatedUser;
  },

  async delete(id: string): Promise<User | undefined> {
    const [deletedUser] = await db
      .delete(users)
      .where(eq(users.id, id))
      .returning();
    return deletedUser;
  },
};
