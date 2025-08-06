import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/form/input';
import placeholder from '@/assets/images/placeholder-user.png';
import { useForm, useWatch } from 'react-hook-form';
import { Dividor } from '@/components/ui/form/dividor';
import { useAuth } from '@/lib/auth';
import { useNavigate } from 'react-router';
import { paths } from '@/config/paths';
import { useState } from 'react';
import { Spinner } from '@/components/ui/spinner';

export interface RegisterInput {
  username: string;
  password: string;
  nickname: string;
  phone: string;
  email: string;
  imageUrl?: string;
}
export const RegisterForm = () => {
  const { register: userRegister } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RegisterInput>();

  const onSubmit = async (values: RegisterInput) => {
    setIsLoading(true);
    await userRegister(values, () => navigate(paths.app.jobPosts.getHref()));
    setIsLoading(false);
  };

  const nickname = useWatch({ control, name: 'nickname' });
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span className="text-xl">
        {nickname ? `${nickname}님 ` : ''}환영합니다!
      </span>
      <div className="flex flex-col items-center">
        <label className="relative cursor-pointer">
          <img src={placeholder} className="w-24 rounded-full" />
          <input type="file" accept="image/*" className="hidden" />
        </label>
      </div>
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="아이디"
          placeholder="abcd1234"
          registration={register('username', {
            required: '아이디는 필수 입력사항입니다.',
            minLength: {
              value: 8,
              message: '아이디는 8글자 이상이여야합니다.',
            },
          })}
          maxLength={20}
          error={errors['username']}
        />
        <Input
          label="비밀번호"
          placeholder="4321dcba"
          registration={register('password', {
            required: '비밀번호는 필수 입력사항입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 8글자 이상이여야합니다.',
            },
          })}
          maxLength={20}
          error={errors['password']}
        />
        <Dividor />
        <Input
          label="닉네임"
          placeholder="대따몬123"
          registration={register('nickname', {
            required: '닉네임은 필수 입력사항입니다.',
          })}
          maxLength={10}
          error={errors['nickname']}
        />
        <Input
          label="전화번호"
          placeholder="010-1234-5678"
          registration={register('phone', {
            required: '전화번호는 필수 입력사항입니다.',
            pattern: {
              value: /^010-\d{4}-\d{4}$/,
              message: '전화번호 형식을 맞춰주세요.',
            },
          })}
          maxLength={13}
          error={errors['phone']}
        />

        <Input
          label="이메일"
          placeholder="dda123@gmail.com"
          registration={register('email', {
            required: '이메일은 필수 입력사항입니다.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '이메일 형식을 맞춰주세요.',
            },
          })}
          maxLength={40}
          error={errors['email']}
        />
        <div className="flex gap-4">
          <Button
            variant="secondary"
            type="button"
            onClick={() => navigate(paths.auth.login.getHref())}
          >
            취소
          </Button>
          <Button type="submit">
            {isLoading ? <Spinner size="sm" /> : '회원가입'}
          </Button>
        </div>
      </form>
    </div>
  );
};
