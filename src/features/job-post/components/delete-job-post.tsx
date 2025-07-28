import { Button } from '@/components/ui/button';
import { useDeleteJobPost } from '@/features/job-post/api/delete-job-post';

interface DeleteJobPostProps {
  jobPostId: string;
}
export const DeleteJobPost = ({ jobPostId }: DeleteJobPostProps) => {
  const deleteJobPostMutation = useDeleteJobPost();
  console.log(jobPostId);
  return (
    <Button
      onClick={() => deleteJobPostMutation.mutate({ jobPostId })}
      variant="secondary"
      size="sm"
    >
      삭제
    </Button>
  );
};
