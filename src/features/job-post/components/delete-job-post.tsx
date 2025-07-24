import { Button } from '@/components/ui/button';
import { deleteDiscussion } from '@/features/job-post/api/delete-job-post';

interface DeleteJobPostProps {
  jobPostId: number;
}
export const DeleteJobPost = ({ jobPostId }: DeleteJobPostProps) => {
  return (
    <Button
      onClick={() => deleteDiscussion(jobPostId)}
      variant="secondary"
      size="sm"
    >
      삭제
    </Button>
  );
};
