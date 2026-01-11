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

  async getUserById(id: string) {
    try {
      const user = await userService.getUserById(id);
      if (!user) {
        return { error: "User not found" };
      }
      return user;
    } catch (err) {
      return { error: "Failed to fetch user" };
    }
  },
};
