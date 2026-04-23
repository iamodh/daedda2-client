import * as authModule from '@/lib/auth';
import { beforeAll, vi } from 'vitest';
import type { LoginRequest } from '@/features/auth/api/login';
import type { RegisterRequest } from '@/features/auth/api/register';

vi.mock('@/lib/auth', () => ({ useAuth: vi.fn() }));

const createAuthMock = () => ({
  isAuthLoading: false,
  isInitializing: false,
  user: null,
  init: vi.fn(),
  register: async (_input: RegisterRequest, onSuccess?: () => void) => {
    onSuccess?.();
  },
  login: async (_input: LoginRequest, onSuccess?: () => void) => {
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
