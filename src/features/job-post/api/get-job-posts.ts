import type { JobPost } from '@/app/routes/app/job-posts';
import { api } from '@/lib/api-client';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getJobPosts = (): Promise<{ data: JobPost[] }> => {
  return api.get('/job-posts');
};

export const getJobPostsQueryOptions = () => {
  return queryOptions({
    queryKey: ['job-posts'],
    queryFn: getJobPosts,
  });
};

export const useJobPosts = () => {
  return useQuery(getJobPostsQueryOptions());
};
