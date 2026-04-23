import type { User } from "@/types/api";
import type { AuthResponse } from "./types";
import { api } from "@/lib/api-client";

export type RegisterRequest = Pick<User, 'username' | 'nickname' | 'phone' | 'email' | 'imageUrl'> & {
    password: string, password2: string
}


export const registerWithUsernameAndPassword = (
  data: RegisterRequest
): Promise<AuthResponse> => {
  return api.post('/auth/register', data);
};