import { api } from '@/lib/api-client';
import type { User } from '@/types/api';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

export const getProfile = ({ userId }: { userId: number }): Promise<User> => {
  return api.get(`/users/${userId}`);
};

export const getProfileQueryOptions = (userId: number) => {
  return queryOptions({
    queryKey: ['users', userId],
    queryFn: () => getProfile({ userId }),
  });
};

export const useProfile = ({ userId }: { userId: number }) => {
  return useSuspenseQuery(getProfileQueryOptions(userId));
};
