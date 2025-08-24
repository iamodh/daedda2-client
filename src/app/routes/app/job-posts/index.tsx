import { JobPostsList } from '@/features/job-post/components/job-posts-list';
import { FloatingButton } from '@/components/ui/button/floating-button';
import plus from '@/assets/icons/plus-white.svg';
import { useNavigate, useSearchParams } from 'react-router';
import { paths } from '@/config/paths';
import { Suspense, useState } from 'react';
import { JobPostListsSkeleton } from '@/features/job-post/components/job-posts-list-skeleton';
import { SearchBar } from '@/components/ui/form/search-bar';
import { Dropdown } from '@/components/ui/dropdown';
import { Checkbox } from '@/components/ui/checkbox';

export type FilterKey = 'workTime' | 'hourlyWage';
export type FilterValue = string | null;
export type FiltersState = Record<FilterKey, FilterValue>;
export type SearchKeywordState = string | null;

const filterOptions = {
  workTime: [
    { name: '초기화', value: null },
    { name: '0~4시간', value: 'short' },
    { name: '4~8시간', value: 'medium' },
    { name: '8시간 초과', value: 'long' },
  ],
  hourlyWage: [
    { name: '초기화', value: null },
    { name: '10,000원 이하', value: 'low' },
    { name: '10,000원 초과', value: 'high' },
  ],
};

const JobPostsRoute = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState<SearchKeywordState>(
    searchParams.get('searchKeyword')
  );
  const [filters, setFilters] = useState<FiltersState>({
    workTime: searchParams.get('workTime'),
    hourlyWage: searchParams.get('hourlyWage'),
  });
  const [showPast, setShowPast] = useState(
    searchParams.get('showPast') === 'true'
  );

  const updateSearchParam = (key: string, value: string | null) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (value) {
        newParams.set(key, String(value)); // boolean 값도 문자열로 변환
      } else {
        newParams.delete(key);
      }
      return newParams;
    });
  };

  const handleSearchClick = (input: SearchKeywordState) => {
    setSearchKeyword(input);
    updateSearchParam('searchKeyword', input);
  };

  const handleFilterChange = (key: FilterKey, value: FilterValue) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    updateSearchParam(key, value);
  };

  const handleCheckedChange = () => {
    const newShowPast = !showPast; // state가 비동기 동작하기 때문
    setShowPast(newShowPast);
    updateSearchParam('showPast', String(newShowPast));
  };

  return (
    <div className="relative flex flex-col">
      <div className="flex flex-col gap-2 mb-3">
        <SearchBar onClick={handleSearchClick} />
        <div className="flex justify-between">
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
              name="hourlyWage"
              value={filters.hourlyWage}
              onChange={handleFilterChange}
              options={filterOptions.hourlyWage}
              size="lg"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={showPast}
              id="show-past"
              onCheckedChange={() => handleCheckedChange()}
            />
            <label htmlFor="show-past" className="text-sm md:text-[1rem]">
              지난 공고 보이기
            </label>
          </div>
        </div>
      </div>
      <Suspense fallback={<JobPostListsSkeleton />}>
        <JobPostsList
          searchKeyword={searchKeyword}
          filters={filters}
          showPast={showPast}
        />
      </Suspense>
      <FloatingButton
        aria-label="구인글 작성"
        icon={<img src={plus} />}
        onClick={() => {
          navigate(paths.app.newJobPost.getHref());
        }}
      />
    </div>
  );
};

export default JobPostsRoute;
