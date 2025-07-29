import type { JobPost } from '@/app/routes/app/job-posts';
import { api } from '@/lib/api-client';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

export const getJobPost = ({
  jobPostId,
}: {
  jobPostId: string;
}): Promise<JobPost> => {
  return api.get(`/job-posts/${jobPostId}`);
  //   return new Promise((resolve) => {
  //     setTimeout(async () => {
  //       const response = await api.get(`./job-posts/${jobPostId}`);
  //       resolve(response);
  //     }, 5000);
  //   });
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
