import { userService } from "../services/user.service";

import type { CreateUserInput } from "../types";

export const userHandler = {
  async create(body: CreateUserInput) {
    try {
      const result = await userService.create(body);
      return result;
    } catch (err) {
      return { error: "Internal server error" };
    }
  },

  async getAll() {
    try {
      return await userService.getAll();
    } catch (err) {
      return { error: "Failed to fetch users" };
    }
  },

  async getById(id: string) {
    try {
      const user = await userService.getById(id);
      if (!user) {
        return { error: "User not found" };
      }
      return user;
    } catch (err) {
      return { error: "Failed to fetch user" };
    }
  },

  async update(id: string, body: Partial<CreateUserInput>) {
    try {
      const result = await userService.update(id, body);
      return result;
    } catch (err) {
      return { error: "Failed to update user" };
    }
  },
};
