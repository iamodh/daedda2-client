import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/form/input';
import placeholder from '@/assets/images/placeholder-user.png';
import { useForm, useWatch } from 'react-hook-form';
import { useProfile } from '@/features/profile/api/get-profile';
import { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';
import {
  useUpdateProfile,
  type UpdateProfileInput,
} from '@/features/profile/api/update-profile';
import { useAuth } from '@/lib/auth';
import { useNavigate } from 'react-router';
import { paths } from '@/config/paths';

interface ProfileViewProps {
  userId: number;
}

export const ProfileView = ({ userId }: ProfileViewProps) => {
  const navigate = useNavigate();
  const [isEditable, setIsEditable] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<UpdateProfileInput>();
  const nickname = useWatch({ control, name: 'nickname' });

  const profileQuery = useProfile({ userId });
  const profile = profileQuery?.data;
  const updateProfileMutation = useUpdateProfile({ userId });

  useEffect(() => {
    if (profile) {
      const { nickname, email, phone, imageUrl } = profile;
      reset({ nickname, email, phone, imageUrl });
    }
  }, [profile]);

  const { logout } = useAuth();

  if (!profile) return null;

  const onSubmit = async (values: UpdateProfileInput) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    await updateProfileMutation.mutateAsync({
      data: values,
      userId,
    });
    setIsEditable(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span className="text-xl">
        {nickname ? `${nickname}님 ` : ''}안녕하세요!
      </span>
      <div className="flex flex-col items-center">
        <label
          className={cn(
            'relative cursor-pointer',
            !isEditable && 'cursor-auto'
          )}
        >
          <img src={placeholder} className="w-24 rounded-full" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            disabled={!isEditable}
          />
        </label>
      </div>
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="닉네임"
          placeholder="대따몬123"
          registration={register('nickname', {
            required: '닉네임은 필수 입력사항입니다.',
          })}
          maxLength={10}
          error={errors['nickname']}
          disabled={!isEditable}
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
          disabled={!isEditable}
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
          disabled={!isEditable}
        />
        {!isEditable && (
          <div className="flex flex-col gap-4">
            <Button type="button" onClick={() => setIsEditable(true)}>
              수정하기
            </Button>
            <Button
              variant="secondary"
              type="button"
              onClick={() =>
                logout(() =>
                  navigate(paths.auth.login.getHref(), { replace: true })
                )
              }
            >
              로그아웃
            </Button>
          </div>
        )}
        {isEditable && (
          <div className="flex gap-4">
            <Button
              variant="secondary"
              type="button"
              onClick={() => setIsEditable(false)}
            >
              취소
            </Button>
            <Button type="submit" isLoading={updateProfileMutation.isPending}>
              완료
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};
