import { paths } from '@/config/paths';
import { CreateJobPost } from '@/features/job-post/components/create-job-post';
import { useOutletContext } from 'react-router';

export interface FormLayoutContext {
  setTitle: (title: string) => void;
}

const NewJobPostRoute = () => {
  const context = useOutletContext<FormLayoutContext>();
  context.setTitle?.(paths.app.newJobPost.title);

  return (
    <div>
      <CreateJobPost />
    </div>
  );
};

export default NewJobPostRoute;
