import { userService } from "../services/user.service";

import type { CreateUserInput } from "../types";

export const userHandler = {
  async create(body: CreateUserInput, setStatus: (status: number) => void) {
    try {
      const result = await userService.create(body);
      setStatus(201);
      return result;
    } catch (err) {
      setStatus(500);
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

  async getUserById(id: string, setStatus: (status: number) => void) {
    try {
      const user = await userService.getUserById(id);
      if (!user) {
        setStatus(404);
        return { error: "User not found" };
      }
      return user;
    } catch (err) {
      setStatus(500);
      return { error: "Failed to fetch user" };
    }
  },
};
