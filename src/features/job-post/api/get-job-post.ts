import { api } from '@/lib/api-client';
import type { JobPost } from '@/types/api';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

export const getJobPost = ({
  jobPostId,
}: {
  jobPostId: string;
}): Promise<JobPost> => {
  return api.get(`/job-posts/${jobPostId}`);
};

export const getJobPostQueryOptions = (jobPostId: string) => {
  return queryOptions({
    queryKey: ['job-posts', jobPostId],
    queryFn: () => getJobPost({ jobPostId }),
  });
};

export const useJobPost = ({ jobPostId }: { jobPostId: string }) => {
  return useSuspenseQuery(getJobPostQueryOptions(jobPostId));
};
