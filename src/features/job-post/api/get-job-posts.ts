import type { JobPost } from '@/app/routes/app/job-posts';
import { api } from '@/lib/api-client';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

export const getJobPosts = (): Promise<{ data: JobPost[] }> => {
  return api.get('/job-posts');
  //   return new Promise((resolve) => {
  //     setTimeout(async () => {
  //       const response = await api.get('./job-posts');
  //       resolve(response);
  //     }, 2000);
  //   });
};

export const getJobPostsQueryOptions = () => {
  return queryOptions({
    queryKey: ['job-posts'],
    queryFn: getJobPosts,
  });
};

export const useJobPosts = () => {
  return useSuspenseQuery(getJobPostsQueryOptions());
};
