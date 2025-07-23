import axios from 'axios';
import { useEffect, useState } from 'react';

import { JobPostsList } from '@/features/job-post/components/job-posts-list';

export interface JobPost {
  id: number;
  title: string;
  location: string;
  pay: number;
  date: string; // ISO 문자열 또는 Date → 백엔드 응답 기준
  startTime: string; // 'HH:mm' 형식
  endTime: string; // 'HH:mm' 형식
  totalHours: number;
  place: string;
  imageUrl: string | null;
  createdAt: string; // ISO 문자열 (e.g., '2025-07-15T19:55:00.000Z')
  content: string;
}

const JobPostsRoute = () => {
  const [jobPosts, setJobPosts] = useState<JobPost[]>();

  useEffect(() => {
    getJobPosts();
  }, []);

  async function getJobPosts() {
    const response = await axios.get<JobPost[]>(
      'http://localhost:4000/job-posts'
    );

    if (Array.isArray(response.data)) {
      // 로컬 서버 사용시 올바른 포트에 요청 보냈는지 확인
      setJobPosts(response.data);
    }
  }

  return (
    <div>
      {jobPosts ? (
        <JobPostsList jobPosts={jobPosts} />
      ) : (
        <h1>등록된 구직 글이 없습니다.</h1>
      )}
    </div>
  );
};

export default JobPostsRoute;
