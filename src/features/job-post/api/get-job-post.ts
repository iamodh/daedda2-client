import type { JobPost } from '@/app/routes/app/job-posts';
import { api } from '@/lib/api-client';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getJobPost = ({
  jobPostId,
}: {
  jobPostId: string;
}): Promise<{ data: JobPost }> => {
  return api.get(`/job-posts/${jobPostId}`);
};

export const getJobPostQueryOptions = (jobPostId: string) => {
  return queryOptions({
    queryKey: ['job-posts', jobPostId],
    queryFn: () => getJobPost({ jobPostId }),
  });
};

export const useJobPost = ({ jobPostId }: { jobPostId: string }) => {
  return useQuery(getJobPostQueryOptions(jobPostId));
};
