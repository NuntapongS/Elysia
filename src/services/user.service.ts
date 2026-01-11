import { userRepository } from "../repositories/user.repository";
import type { CreateUserInput, UserOutput, User } from "../types";

export const userService = {
  async create(data: CreateUserInput): Promise<UserOutput> {
    const newUser = await userRepository.create(data);
    return { id: newUser.id };
  },

  async getAll(): Promise<User[]> {
    return userRepository.getAll();
  },

  async getUserById(id: string): Promise<User | undefined> {
    return userRepository.getUserById(id);
  },
};
