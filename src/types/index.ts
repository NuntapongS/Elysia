export type User = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
};

export type CreateUserInput = {
  name: string;
  email: string;
};

export type UpdateUserInput = Partial<CreateUserInput>;
