import type { LoginInput } from '@/features/auth/components/login-form';
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

export const useAuth = () => {
  const { user, login, logout } = useAuthStore();

  return {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };
};
