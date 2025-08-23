import * as authModule from '@/lib/auth';
import { beforeAll, vi } from 'vitest';
import type { LoginInput } from '@/features/auth/components/login-form';
import type { RegisterInput } from '@/features/auth/components/register-form';

vi.mock('@/lib/auth', () => ({ useAuth: vi.fn() }));

const createAuthMock = () => ({
  isAuthLoading: false,
  isInitializing: false,
  user: null,
  init: vi.fn(),
  register: async (_input: RegisterInput, onSuccess?: () => void) => {
    onSuccess?.();
  },
  login: async (_input: LoginInput, onSuccess?: () => void) => {
    onSuccess?.();
  },
  logout: vi.fn(),
});

export const mockUseAuth = (
  overrides?: Partial<ReturnType<typeof createAuthMock>>
) => {
  const defaultMock = createAuthMock();
  const finalMock = { ...defaultMock, ...overrides };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (authModule.useAuth as any).mockReturnValue(finalMock);
};

beforeAll(() => {
  mockUseAuth();
});
