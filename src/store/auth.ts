import type { LoginInput } from '@/features/auth/components/login-form';
import type { RegisterInput } from '@/features/auth/components/register-form';
import {
  getUser,
  loginWithUsernameAndPassword,
  registerWithUsernameAndPassword,
} from '@/lib/auth';
import type { User } from '@/types/api';
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  register: (input: RegisterInput, onSuccess?: () => void) => Promise<void>;
  login: (input: LoginInput, onSuccess?: () => void) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  register: async (input, onSuccess) => {
    try {
      const { access_token } = await registerWithUsernameAndPassword(input);
      localStorage.setItem('access_token', access_token);
      const user = await getUser();
      set({ user });
      alert('회원가입에 성공하였습니다.');
      onSuccess?.();
    } catch (error: unknown) {
      console.error(error);
      alert('회원가입에 실패하였습니다.');
    }
  },
  login: async (input, onSuccess) => {
    try {
      const { access_token } = await loginWithUsernameAndPassword(input);
      localStorage.setItem('access_token', access_token);

      const user = await getUser();
      set({ user });
      alert('로그인에 성공하였습니다.');
      onSuccess?.();
    } catch (error: unknown) {
      console.error(error);
      alert('로그인에 실패하였습니다.');
    }
  },
  logout: () => {
    localStorage.removeItem('access_token');
    set({ user: null });
  },
}));
