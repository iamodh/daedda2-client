import type {
  FiltersState,
  SearchKeywordState,
} from '@/app/routes/app/job-posts';
import imagePlaceholder from '@/assets/images/placeholder-image.png';
import { Spinner } from '@/components/ui/spinner';
import { paths } from '@/config/paths';
import { useInfiniteJobPosts } from '@/features/job-post/api/get-job-posts';
import { useIntersectionObserver } from '@/lib/pagination';
import { formatDateToKoreanShort } from '@/utils/format';
import { Link } from 'react-router';

interface JobPostListProps {
  searchKeyword?: SearchKeywordState;
  filters?: FiltersState;
  showPast: boolean;
}
const JobPostsList = ({
  searchKeyword,
  filters,
  showPast,
}: JobPostListProps) => {
  const jobPostsQuery = useInfiniteJobPosts(
    5,
    searchKeyword,
    filters,
    showPast
  );

  const jobPosts = jobPostsQuery.data?.pages.flatMap((page) => page.data);

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer
  ) => {
    if (
      entry.isIntersecting &&
      jobPostsQuery.hasNextPage &&
      !jobPostsQuery.isFetchingNextPage
    ) {
      observer.unobserve(entry.target);
      await jobPostsQuery.fetchNextPage();
      observer.observe(entry.target);
    }
  };

  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
    onIntersect,
  });

  if (!jobPosts) return null;

  if (jobPosts.length === 0) {
    return (
      <div className="text-slate-800 text-lg">
        검색 결과가 존재하지 않습니다.
      </div>
    );
  }
  return (
    <>
      <ul className="flex flex-col gap-4">
        {jobPosts.map((jobPost) => (
          <li key={jobPost.id}>
            <Link
              className="flex items-center justify-between py-3 px-4 shadow-custom rounded-lg gap-4"
              to={paths.app.jobPost.getHref(jobPost.id)}
            >
              <div className="flex flex-col gap-0.5">
                <p className="font-bold md:text-lg line-clamp-1">
                  {jobPost.title}
                </p>
                <p className="font-semibold md:text-sm text-xs text-slate-700">
                  {jobPost.place}ㆍ{jobPost.location.split(' ')[2]}
                </p>
                <p className="font-bold md:text-lg text-pirmary-500">
                  {jobPost.pay.toLocaleString()}원ㆍ시급{' '}
                  {jobPost.hourlyWage.toLocaleString()}원
                </p>
                <p className="font-semibold  md:text-sm text-xs text-slate-700">
                  {formatDateToKoreanShort(jobPost.date)}ㆍ{jobPost.startTime} ~{' '}
                  {jobPost.endTime}
                  <span className="md:visible hidden">
                    ㆍ{jobPost.totalHours}시간
                  </span>
                </p>
              </div>
              <img
                src={imagePlaceholder}
                className="rounded-lg md:size-28 size-24"
              />
            </Link>
          </li>
        ))}
      </ul>
      {jobPostsQuery.hasNextPage && !jobPostsQuery.isFetchingNextPage && (
        <div ref={setTarget}>LOADING</div>
      )}
      {jobPostsQuery.isFetchingNextPage && (
        <div ref={setTarget} className="flex justify-center">
          {jobPostsQuery.isFetchingNextPage && (
            <Spinner size="md" className="my-8" />
          )}
        </div>
      )}
    </>
  );
};

export { JobPostsList };
