import type { JobPost } from '@/app/routes/app/job-posts';
import { paths } from '@/config/paths';
import { api } from '@/lib/api-client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

export type UpdateJobPostInputs = Omit<
  JobPost,
  'id' | 'createdAt' | 'hourlyWage'
>;

export const updateJobPost = ({
  data,
  jobPostId,
}: {
  data: UpdateJobPostInputs;
  jobPostId: string;
}): Promise<JobPost> => {
  return api.patch(`/job-posts/${jobPostId}`, data);
};

interface useUpdateJobPostOptions {
  jobPostId: string;
}

export const useUpdateJobPost = ({ jobPostId }: useUpdateJobPostOptions) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: updateJobPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['job-posts', jobPostId] });
      navigate(paths.app.jobPost.getHref(parseInt(jobPostId)), {
        replace: true,
      });
      alert('글 수정이 완료되었습니다.');
    },

    onError: (error) => {
      alert('글 수정에 실패하였습니다.');
      console.error(error);
      navigate(paths.app.jobPosts.getHref(), { replace: true });
    },
  });
};
