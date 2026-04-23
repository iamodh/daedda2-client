import type { User } from "@/types/api";
import { api } from "@/lib/api-client";
import type { AuthResponse } from "./types";

export type LoginRequest = Pick<User, 'username'> & {
  password: string;
}

export const loginWithUsernameAndPassword = (
  data: LoginRequest
): Promise<AuthResponse> => {
  return api.post('/auth/login', data);
};
