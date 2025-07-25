import type { JobPost } from '@/app/routes/app/job-posts';
import { JobPostView } from '@/features/job-post/components/job-post-view';
import { api } from '@/lib/api-client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

// Todo
// - react query 적용
// - JobPostView에 jobPostId 전달 JobPostView에서 react query 활용해 캐시에서 데이터 찾기

const JobPostRoute = () => {
  const { jobPostId } = useParams();

  const [jobPost, setJobPost] = useState<JobPost>();
  useEffect(() => {
    getJobPost();
  }, []);

  async function getJobPost() {
    const response = await api.get<JobPost>(`/job-posts/${jobPostId}`);

    if (response.data) {
      setJobPost(response.data);
    }
  }
  return (
    <div>
      {jobPost ? (
        <div>
          <JobPostView jobPost={jobPost} />
        </div>
      ) : (
        <div>로딩중...</div>
      )}
    </div>
  );
};

export default JobPostRoute;
