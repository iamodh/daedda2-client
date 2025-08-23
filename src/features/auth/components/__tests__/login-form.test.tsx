import { expect, it, vi } from 'vitest';

import {
  LoginForm,
  type LoginInput,
} from '@/features/auth/components/login-form';
import { renderApp } from '@/testing/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('로그인에 성공하면 onSuccess 함수가 실행되어야 한다.', async () => {
  const input: LoginInput = {
    username: 'user1234',
    password: 'password',
  };

  const onSuccess = vi.fn();

  renderApp(<LoginForm onSuccess={onSuccess} />);

  await userEvent.type(screen.getByPlaceholderText(/아이디/), input.username);
  await userEvent.type(screen.getByPlaceholderText(/비밀번호/), input.password);

  await userEvent.click(screen.getByRole('button', { name: '로그인' }));

  await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(1));
});
