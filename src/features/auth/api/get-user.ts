import { api } from "@/lib/api-client";
import type { User } from "@/types/api";

export const getUser = async (): Promise<User> => {
  const user: User = await api.get('/auth/profile');

  return user;
};