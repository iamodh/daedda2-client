import type { LoginInput } from '@/features/auth/components/login-form';
import type { RegisterInput } from '@/features/auth/components/register-form';
import { api } from '@/lib/api-client';
import { useAuthStore } from '@/store/auth';
import type { AuthResponse, User } from '@/types/api';

export const getUser = async (): Promise<User> => {
  const user: User = await api.get('/auth/profile');

  return user;
};

export const loginWithUsernameAndPassword = (
  data: LoginInput
): Promise<AuthResponse> => {
  return api.post('/auth/login', data);
};

export const registerWithUsernameAndPassword = (
  data: RegisterInput
): Promise<AuthResponse> => {
  return api.post('/auth/register', data);
};

export const useAuth = () => {
  const { user, register, login, logout } = useAuthStore();

  return {
    user,
    register,
    login,
    logout,
    isAuthenticated: !!user,
  };
};
