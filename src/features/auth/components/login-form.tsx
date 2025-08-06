import logo from '@/assets/logo.png';
import ddamon from '@/assets/ddamon.png';
import { Input } from '@/components/ui/form/input';
import { Button } from '@/components/ui/button';
import kakao from '@/assets/icons/kakao.svg';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/lib/auth';
import { useState } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { Link, useNavigate } from 'react-router';
import { paths } from '@/config/paths';

export interface LoginInput {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();

  const onSubmit = async (values: LoginInput) => {
    setIsLoading(true);
    await login(values, () =>
      navigate(paths.app.jobPosts.getHref(), { replace: true })
    );
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center gap-4">
      <span>급하게 필요한 사람이 있을 때,</span>
      <div className="flex flex-col items-center">
        <img src={logo} className="w-50" />
        <img src={ddamon} className="w-30 animate-hop" />
      </div>
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="아이디"
          registration={register('username', {
            required: '아이디는 필수 입력사항입니다.',
            minLength: {
              value: 8,
              message: '아이디는 최소 8글자 이상이여야합니다.',
            },
          })}
          maxLength={20}
          error={errors['username']}
        />
        <Input
          placeholder="비밀번호"
          type="password"
          registration={register('password', {
            minLength: {
              value: 8,
              message: '비밀번호는 최소 8글자 이상이여야합니다.',
            },

            required: '비밀번호는 필수 입력사항입니다.',
          })}
          maxLength={20}
          error={errors['password']}
        />
        <Button type="submit">
          {isLoading ? <Spinner size="sm" /> : '로그인'}
        </Button>
        <Button icon={<img src={kakao} />} variant="kakao" type="button">
          카카오 로그인
        </Button>
      </form>
      <div className="text-sm">
        <span>처음 이용하시나요? </span>
        <Link to={paths.auth.register.getHref()} className="underline">
          회원가입↗
        </Link>
      </div>
    </div>
  );
};
