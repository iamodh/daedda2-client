import { JobPostsList } from '@/features/job-post/components/job-posts-list';
import { FloatingButton } from '@/components/ui/button/floating-button';
import plus from '@/assets/icons/plus-white.svg';
import { useNavigate } from 'react-router';
import { paths } from '@/config/paths';
import { Suspense, useState } from 'react';
import { JobPostListsSkeleton } from '@/features/job-post/components/job-posts-list-skeleton';
import { SearchBar } from '@/components/ui/form/search-bar';
import { Dropdown } from '@/components/ui/dropdown';

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

export type FilterKey = 'workTime' | 'pay';
export type FilterValue = string | null;
export type FiltersState = Record<FilterKey, FilterValue>;

const filterOptions = {
  workTime: [
    { name: '초기화', value: null },
    { name: '0~4시간', value: 'short' },
    { name: '4~8시간', value: 'medium' },
    { name: '8시간 초과', value: 'long' },
  ],
  pay: [
    { name: '초기화', value: null },
    { name: '10,000원 이하', value: 'low' },
    { name: '10,000원 초과', value: 'high' },
  ],
};

export type SearchKeywordState = string | null;

const JobPostsRoute = () => {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState<SearchKeywordState>(null);

  const [filters, setFilters] = useState<FiltersState>({
    workTime: null,
    pay: null,
  });

  const handleSearchClick = (input: SearchKeywordState) => {
    setSearchKeyword(input);
  };

  const handleFilterChange = (key: FilterKey, value: FilterValue) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="relative flex flex-col">
      <div className="flex flex-col gap-2 mb-3">
        <SearchBar onClick={handleSearchClick} />
        <div className="flex gap-2">
          <Dropdown
            title="근무 시간"
            name="workTime"
            value={filters.workTime}
            onChange={handleFilterChange}
            options={filterOptions.workTime}
          />
          <Dropdown
            title="시간당 급여"
            name="pay"
            value={filters.pay}
            onChange={handleFilterChange}
            options={filterOptions.pay}
            size="lg"
          />
        </div>
      </div>
      <Suspense fallback={<JobPostListsSkeleton />}>
        <JobPostsList searchKeyword={searchKeyword} filters={filters} />
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
