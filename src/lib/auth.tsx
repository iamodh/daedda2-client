import { useAuthStore } from '@/store/auth';

export const useAuth = () => {
  const { isAuthLoading, isInitializing, user, init, register, login, logout } =
    useAuthStore();

  return {
    isAuthLoading,
    isInitializing,
    user,
    init,
    register,
    login,
    logout,
  };
};
