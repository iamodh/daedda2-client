import type { JobPost } from '@/app/routes/app/job-posts';
import { api } from '@/lib/api-client';
import {
  infiniteQueryOptions,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query';

export const getJobPosts = async ({
  pageParam,
  limit = 5,
}: {
  pageParam: string;
  limit: number;
}): Promise<{
  data: JobPost[];
  nextCursor: string | null;
}> => {
  return await api.get('/job-posts', {
    params: { cursor: pageParam, limit },
  });
};

export const getInfiniteJobPostsQueryOptions = (limit = 5) => {
  return infiniteQueryOptions({
    queryKey: ['job-posts'],
    queryFn: ({ pageParam }) => getJobPosts({ pageParam, limit }),
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    initialPageParam: '',
  });
};

export const useInfiniteJobPosts = (limit = 5) => {
  return useSuspenseInfiniteQuery(getInfiniteJobPostsQueryOptions(limit));
};
