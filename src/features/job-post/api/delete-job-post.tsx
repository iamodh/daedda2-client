import { paths } from '@/config/paths';
import axios from 'axios';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

interface UseDeleteJobPostOptions {
  jobPostId: number;
}

export const useDeleteJobPost = ({ jobPostId }: UseDeleteJobPostOptions) => {
  const navigate = useNavigate();

  const deleteJobPost = useCallback(async () => {
    try {
      await axios.delete(`http://localhost:4000/job-posts/${jobPostId}`);
      alert('삭제가 완료되었습니다.');
      navigate(paths.app.jobPosts.getHref());
    } catch (error) {
      alert('삭제에 실패하였습니다.');
      console.error(error);
    }
  }, [jobPostId, navigate]);

  return { deleteJobPost };
};
