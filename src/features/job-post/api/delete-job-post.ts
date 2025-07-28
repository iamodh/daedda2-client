import { paths } from '@/config/paths';
import { api } from '@/lib/api-client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

export const deleteJobPost = ({ jobPostId }: { jobPostId: string }) => {
  return api.delete(`/job-posts/${jobPostId}`);
};

export const useDeleteJobPost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteJobPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['job-posts'] });
      alert('삭제가 완료되었습니다.');
      navigate(paths.app.jobPosts.getHref());
    },
    onError: (error) => {
      alert('삭제에 실패하였습니다.');
      console.error(error);
    },
  });
};
