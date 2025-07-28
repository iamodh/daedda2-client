import type { FormLayoutContext } from '@/app/routes/app/job-posts/new';
import { paths } from '@/config/paths';
import { UpdateJobPost } from '@/features/job-post/components/update-job-post';
import { useOutletContext, useParams } from 'react-router';

const EditJobPostRoute = () => {
  const context = useOutletContext<FormLayoutContext>();
  const params = useParams();
  const jobPostId = params.jobPostId as string;

  context.setTitle(paths.app.eidtJobPost.title);
  return (
    <div>
      <UpdateJobPost jobPostId={jobPostId} />
    </div>
  );
};

export default EditJobPostRoute;
