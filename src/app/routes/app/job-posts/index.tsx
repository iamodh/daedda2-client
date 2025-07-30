import { JobPostsList } from '@/features/job-post/components/job-posts-list';
import { FloatingButton } from '@/components/ui/button/floating-button';
import plus from '@/assets/icons/plus-white.svg';
import { useNavigate } from 'react-router';
import { paths } from '@/config/paths';
import { Suspense, useState } from 'react';
import { JobPostListsSkeleton } from '@/features/job-post/components/job-posts-list-skeleton';
import { SearchBar } from '@/components/ui/form/search-bar';
import { Dropdown } from '@/components/ui/dropdown/dropdown';

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

const workTimeOptions = [
  { name: '초기화', value: 'default' },
  { name: '0~4시간', value: 'short' },
  { name: '4~8시간', value: 'medium' },
  { name: '8시간 초과', value: 'long' },
];
const payOptions = [
  { name: '초기화', value: 'default' },
  { name: '10,000원 이하', value: 'low' },
  { name: '10,000원 초과', value: 'high' },
];

const JobPostsRoute = () => {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');

  const [workTime, setWorkTime] = useState('default');
  const [pay, setPay] = useState('default');

  const onSearchClick = (input: string) => {
    setSearchKeyword(input);
  };

  return (
    <div className="relative flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <SearchBar onSearchClick={onSearchClick} />
        <div className="flex gap-2">
          <Dropdown
            title="근무 시간"
            value={workTime}
            onChange={setWorkTime}
            options={workTimeOptions}
          />
          <Dropdown
            title="시간당 급여"
            value={pay}
            onChange={setPay}
            options={payOptions}
            size="lg"
          />
        </div>
      </div>
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
