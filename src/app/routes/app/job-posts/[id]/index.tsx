import type { JobPost } from '@/app/routes/app/job-posts';
import { JobPostView } from '@/features/job-post/components/job-post-view';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const JobPostRoute = () => {
  const { jobPostId } = useParams();

  const [jobPost, setJobPost] = useState<JobPost>();
  useEffect(() => {
    getJobPost();
  }, []);

  async function getJobPost() {
    const response = await axios.get<JobPost>(
      `http://localhost:4000/job-posts/${jobPostId}`
    );

    if (response.data) {
      // 로컬 서버 사용시 올바른 포트에 요청 보냈는지 확인
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
