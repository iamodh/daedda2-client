import type {
  FiltersState,
  SearchKeywordState,
} from '@/app/routes/app/job-posts';
import { Spinner } from '@/components/ui/spinner';
import { paths } from '@/config/paths';
import { useInfiniteJobPosts } from '@/features/job-post/api/get-job-posts';
import useIntersection from '@/lib/intersection';
import { formatDateToKoreanShort } from '@/utils/format';
import { optimizeImage } from '@/utils/image';
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
    6,
    searchKeyword,
    filters,
    showPast
  );

  const jobPosts = jobPostsQuery.data?.pages.flatMap((page) => page.data);
  jobPosts.map(
    (jobPost) =>
      (jobPost.imageUrl = optimizeImage(jobPost.imageUrl, '120', '120'))
  );

  //   뷰포트에 감지된 이미지들의 src를 dataset-src로 변경
  const lazyImageCallback: IntersectionObserverCallback = (
    entries,
    observer
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target instanceof HTMLImageElement) {
        const imageSrc = entry.target.dataset.src;
        if (imageSrc) {
          entry.target.src = imageSrc;
        }

        // 변경이 끝난 이미지 unobserve
        observer.unobserve(entry.target);
      }
    });
  };

  const infiniteScrollCallback: IntersectionObserverCallback = async ([
    entry,
  ]) => {
    if (
      entry.isIntersecting &&
      jobPostsQuery.hasNextPage &&
      !jobPostsQuery.isFetchingNextPage
    ) {
      await jobPostsQuery.fetchNextPage();
    }
  };

  const { setTarget: setLazyImageTarget } = useIntersection({
    threshold: 0.2,
    rootMargin: '0px 0px 50% 0px',
    callback: lazyImageCallback,
  });

  const { setTarget: setInfiniteScrollTarget } = useIntersection({
    threshold: 0.2,
    rootMargin: '0px 0px 30% 0px',
    callback: infiniteScrollCallback,
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
                ref={setLazyImageTarget}
                data-src={jobPost.imageUrl}
                // src="https://picsum.photos/id/0/5000/3333"
                src={`${jobPost.imageUrl}?blur=10`}
                className="rounded-lg md:size-28 size-24 object-cover"
                alt={`${jobPost.id} image`}
              />
            </Link>
          </li>
        ))}
      </ul>
      {jobPostsQuery.hasNextPage && <div ref={setInfiniteScrollTarget} />}
      {jobPostsQuery.isFetching && (
        <div className="flex justify-center">
          <Spinner size="md" className="my-8" />
        </div>
      )}
    </>
  );
};

export { JobPostsList };
