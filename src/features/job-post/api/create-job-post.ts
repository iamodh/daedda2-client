import type { JobPost } from '@/app/routes/app/job-posts';
import { paths } from '@/config/paths';
import { api } from '@/lib/api-client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

export type CreateJobPostInputs = Omit<
  JobPost,
  'id' | 'createdAt' | 'hourlyWage'
>;

export const createJobPost = ({
  data,
}: {
  data: CreateJobPostInputs;
}): Promise<{ identifiers: { id: number }[] }> => {
  return api.post('/job-posts', data);
};

export const useCreateJobPost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createJobPost,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['job-posts'] });
      alert('글 작성이 완료되었습니다.');
      navigate(paths.app.jobPost.getHref(response.identifiers?.[0]?.id), {
        replace: true,
      });
    },
    onError: (error) => {
      alert('글 작성에 실패하였습니다.');
      console.error(error);
      navigate(paths.app.jobPosts.getHref(), { replace: true });
    },
  });
};
