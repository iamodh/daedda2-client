import type { LoginInput } from '@/features/auth/components/login-form';
import { getUser, loginWithUsernameAndPassword } from '@/lib/auth';
import type { User } from '@/types/api';
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  error: string | null;
  login: (input: LoginInput) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  error: null,
  login: async (input) => {
    try {
      const { access_token } = await loginWithUsernameAndPassword(input);
      localStorage.setItem('access_token', access_token);

      const user = await getUser();
      set({ user, error: null });
      alert('로그인에 성공하였습니다.');
    } catch (err: unknown) {
      const error = err as Error;
      set({ error: error.message });
      alert('로그인에 실패하였습니다.');
    }
  },
  logout: () => {
    localStorage.removeItem('access_token');
    set({ user: null });
  },
}));
