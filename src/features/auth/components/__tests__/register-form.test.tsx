import {
  RegisterForm,
  type RegisterInput,
} from '@/features/auth/components/register-form';
import { renderApp } from '@/testing/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it, vi } from 'vitest';

it('회원가입에 성공하면 onSuccess 함수가 실행되어야 한다.', async () => {
  const input: RegisterInput = {
    username: 'user1234',
    password: 'password',
    password2: 'password',
    phone: '010-0000-0000',
    email: 'test@test.com',
    nickname: 'testuser',
    imageUrl: null,
  };

  const onSuccess = vi.fn();

  renderApp(<RegisterForm onSuccess={onSuccess} />);

  await userEvent.type(screen.getByLabelText('아이디'), input.username);
  await userEvent.type(screen.getByLabelText('비밀번호'), input.password);
  await userEvent.type(screen.getByLabelText('비밀번호 확인'), input.password2);
  await userEvent.type(screen.getByLabelText('닉네임'), input.nickname);
  await userEvent.type(screen.getByLabelText('전화번호'), input.phone);
  await userEvent.type(screen.getByLabelText('이메일'), input.email);

  await userEvent.click(screen.getByRole('button', { name: '회원가입' }));

  await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(1));
});
