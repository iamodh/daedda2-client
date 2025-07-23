import type { JobPost } from '@/app/routes/app/job-posts/job-posts';
import imagePlaceholder from '@/assets/images/placeholder-image.png';
import { paths } from '@/config/paths';
import { formatDateToKoreanShort } from '@/utils/format';
import { Link } from 'react-router';

interface JobPostsListProps {
  jobPosts: JobPost[];
}
const JobPostsList = ({ jobPosts }: JobPostsListProps) => {
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
                  {parseInt(
                    (jobPost.pay / jobPost.totalHours).toFixed(0)
                  ).toLocaleString()}
                  원
                </p>
                <p className="font-semibold  md:text-sm text-xs text-slate-700">
                  {formatDateToKoreanShort(jobPost.date)}ㆍ{jobPost.startTime} ~{' '}
                  {jobPost.endTime}ㆍ{jobPost.totalHours}시간
                </p>
              </div>
              <img
                src={imagePlaceholder}
                width="120px"
                className="rounded-lg md:size-28 size-26"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export { JobPostsList };
