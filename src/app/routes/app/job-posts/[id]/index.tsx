import { JobPostView } from '@/features/job-post/components/job-post-view';
import { JobPostViewSkeleton } from '@/features/job-post/components/job-post-view-skeleton';
import { Suspense } from 'react';

import { useParams } from 'react-router';

// Todo
// - react query 적용
// - JobPostView에 jobPostId 전달 JobPostView에서 react query 활용해 캐시에서 데이터 찾기

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
