import type {
  FiltersState,
  JobPost,
  SearchKeywordState,
} from '@/app/routes/app/job-posts';
import { api } from '@/lib/api-client';
import {
  infiniteQueryOptions,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query';

export const getJobPosts = async ({
  pageParam,
  limit = 5,
  searchKeyword,
  filters,
}: {
  pageParam: string;
  limit: number;
  searchKeyword?: SearchKeywordState;
  filters?: FiltersState;
}): Promise<{
  data: JobPost[];
  nextCursor: string | null;
}> => {
  return await api.get('/job-posts', {
    params: {
      cursor: pageParam ? pageParam : null,
      limit,
      searchKeyword,
      ...filters,
    },
  });
};

export const getInfiniteJobPostsQueryOptions = (
  limit: number,
  searchKeyword?: SearchKeywordState,
  filters?: FiltersState
) => {
  return infiniteQueryOptions({
    queryKey: ['job-posts', searchKeyword, filters],
    queryFn: ({ pageParam }) =>
      getJobPosts({ pageParam, limit, searchKeyword, filters }),
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor ?? undefined;
    },
    initialPageParam: '',
  });
};

export const useInfiniteJobPosts = (
  limit = 5,
  searchKeyword?: SearchKeywordState,
  filters?: FiltersState
) => {
  return useSuspenseInfiniteQuery(
    getInfiniteJobPostsQueryOptions(limit, searchKeyword, filters)
  );
};
