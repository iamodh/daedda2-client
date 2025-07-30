import { JobPostsList } from '@/features/job-post/components/job-posts-list';
import { FloatingButton } from '@/components/ui/button/floating-button';
import plus from '@/assets/icons/plus-white.svg';
import { useNavigate } from 'react-router';
import { paths } from '@/config/paths';
import { Suspense, useState } from 'react';
import { JobPostListsSkeleton } from '@/features/job-post/components/job-posts-list-skeleton';
import { SearchBar } from '@/components/ui/form/search-bar';

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
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  return (
    <div className="relative flex flex-col gap-4">
      <SearchBar setSearchKeyword={setSearchKeyword} />
      <Suspense fallback={<JobPostListsSkeleton />}>
        <JobPostsList searchKeyword={searchKeyword} />
      </Suspense>
      <FloatingButton
        icon={<img src={plus} />}
        onClick={() => {
          navigate(paths.app.newJobPost.getHref());
        }}
      />
    </div>
  );
};

export default JobPostsRoute;
