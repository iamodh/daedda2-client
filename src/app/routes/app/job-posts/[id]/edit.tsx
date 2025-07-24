import type { FormLayoutContext } from '@/app/routes/app/job-posts/new';
import { paths } from '@/config/paths';
import { UpdateJobPost } from '@/features/job-post/components/update-job-post';
import { useOutletContext } from 'react-router';

const EditJobPostRoute = () => {
  const context = useOutletContext<FormLayoutContext>();
  context.setTitle(paths.app.eidtJobPost.title);
  return (
    <div>
      <UpdateJobPost />
    </div>
  );
};

export default EditJobPostRoute;
