import { JobPostView } from '@/features/job-post/components/job-post-view';
import { JobPostViewSkeleton } from '@/features/job-post/components/job-post-view-skeleton';
import { Suspense } from 'react';

import { useParams } from 'react-router';

const JobPostRoute = () => {
  const params = useParams();
  const jobPostId = params.jobPostId as string;
  return (
    <>
      <Suspense fallback={<JobPostViewSkeleton />}>
        <JobPostView jobPostId={jobPostId} />
      </Suspense>
    </>
  );
};

export default JobPostRoute;
