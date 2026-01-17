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

  async getById(id: string): Promise<User | undefined> {
    return userRepository.getById(id);
  },

  async update(
    id: string,
    data: Partial<CreateUserInput>
  ): Promise<UserOutput | undefined> {
    const updatedUser = await userRepository.update(id, data);
    if (!updatedUser) return undefined;
    return { id: updatedUser.id };
  },

  async delete(id: string): Promise<{ status: string }> {
    const deletedUser = await userRepository.getById(id);
    if (!deletedUser) {
      return { status: "not found user" };
    }
    await userRepository.delete(id);
    return { status: "ok" };
  },
};
