import { paths } from '@/config/paths';
import { api } from '@/lib/api-client';
import type { User } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

export type UpdateProfileInput = Omit<
  User,
  'id' | 'username' | 'password' | 'isSocial' | 'createdAt'
>;

export const updateProfile = ({
  data,
  userId,
}: {
  data: UpdateProfileInput;
  userId: number;
}): Promise<User> => {
  return api.patch(`/users/${userId}`, data);
};

interface useUpdateProfileOptions {
  userId: number;
}

export const useUpdateProfile = ({ userId }: useUpdateProfileOptions) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users', userId] });
      navigate(paths.app.profile.getHref(), { replace: true });
      alert('프로필 업데이트가 완료되었습니다.');
    },
    onError: (error) => {
      alert('프로필 업데이트에 실패하였습니다.');
      console.error(error);
      navigate(paths.app.profile.getHref(), { replace: true });
    },
  });
};
