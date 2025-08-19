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
  isAuthLoading: boolean;
  isInitializing: boolean;

  init: () => Promise<void>;
  register: (input: RegisterInput, onSuccess?: () => void) => Promise<void>;
  login: (input: LoginInput, onSuccess?: () => void) => Promise<void>;
  logout: (onSuccess?: () => void) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthLoading: false,
  isInitializing: true,

  init: async () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      set({ isInitializing: false });
      return;
    }

    // 중복 호출 방지
    const state = get();
    if (state.user) return;

    set({ isAuthLoading: true });
    try {
      const user = await getUser();
      set({ user });
      set({ isInitializing: false });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isAuthLoading: false, isInitializing: false });
    }
  },

  register: async (input, onSuccess) => {
    set({ isAuthLoading: true });

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
    } finally {
      set({ isAuthLoading: false, isInitializing: false });
    }
  },

  login: async (input, onSuccess) => {
    set({ isAuthLoading: true });
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
    } finally {
      set({ isAuthLoading: false, isInitializing: false });
    }
  },

  logout: (onSuccess) => {
    localStorage.removeItem('access_token');
    set({ user: null });
    alert('로그아웃 되었습니다');
    onSuccess?.();
  },
}));
