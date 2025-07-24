import { Button } from '@/components/ui/button';
import { useDeleteJobPost } from '@/features/job-post/api/delete-job-post';

interface DeleteJobPostProps {
  jobPostId: number;
}
export const DeleteJobPost = ({ jobPostId }: DeleteJobPostProps) => {
  const { deleteJobPost } = useDeleteJobPost({ jobPostId });
  return (
    <Button onClick={deleteJobPost} variant="secondary" size="sm">
      삭제
    </Button>
  );
};
