import type {
  FiltersState,
  SearchKeywordState,
} from '@/app/routes/app/job-posts';
import { api } from '@/lib/api-client';
import type { JobPost } from '@/types/api';
import {
  infiniteQueryOptions,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query';

export const getJobPosts = async ({
  pageParam,
  limit = 5,
  searchKeyword,
  filters,
  showPast,
}: {
  pageParam: string;
  limit: number;
  searchKeyword?: SearchKeywordState;
  filters?: FiltersState;
  showPast?: boolean;
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
      showPast,
    },
  });
};

export const getInfiniteJobPostsQueryOptions = (
  limit: number,
  searchKeyword?: SearchKeywordState,
  filters?: FiltersState,
  showPast?: boolean
) => {
  return infiniteQueryOptions({
    queryKey: ['job-posts', searchKeyword, filters, { showPast: showPast }],
    queryFn: ({ pageParam }) =>
      getJobPosts({ pageParam, limit, searchKeyword, filters, showPast }),
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor ?? undefined;
    },
    initialPageParam: '',
  });
};

export const useInfiniteJobPosts = (
  limit = 5,
  searchKeyword?: SearchKeywordState,
  filters?: FiltersState,
  showPast?: boolean
) => {
  return useSuspenseInfiniteQuery(
    getInfiniteJobPostsQueryOptions(limit, searchKeyword, filters, showPast)
  );
};
