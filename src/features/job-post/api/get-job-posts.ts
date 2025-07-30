import type { JobPost } from '@/app/routes/app/job-posts';
import { api } from '@/lib/api-client';
import {
  infiniteQueryOptions,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query';

export const getJobPosts = async ({
  pageParam,
  limit = 5,
  searchKeyword,
}: {
  pageParam: string;
  limit: number;
  searchKeyword?: string;
}): Promise<{
  data: JobPost[];
  nextCursor: string | null;
}> => {
  return await api.get('/job-posts', {
    params: { cursor: pageParam, limit, searchKeyword },
  });
};

export const getInfiniteJobPostsQueryOptions = (
  limit: number,
  searchKeyword?: string
) => {
  return infiniteQueryOptions({
    queryKey: searchKeyword?.trim()
      ? ['job-posts', searchKeyword]
      : ['job-posts'],
    queryFn: ({ pageParam }) =>
      getJobPosts({ pageParam, limit, searchKeyword }),
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor ?? undefined;
    },
    initialPageParam: '',
  });
};

export const useInfiniteJobPosts = (limit = 5, searchKeyword?: string) => {
  return useSuspenseInfiniteQuery(
    getInfiniteJobPostsQueryOptions(limit, searchKeyword)
  );
};
