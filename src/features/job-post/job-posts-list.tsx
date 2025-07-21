import type { JobPost } from '@/app/routes/app/job-posts/job-posts';
import placeholder from '@/assets/images/placeholder.png';
import { formatDateToKoreanShort } from '@/utils/format';

interface JobPostsListProps {
  posts: JobPost[];
}
const JobPostsList = ({ posts }: JobPostsListProps) => {
  return (
    <>
      <ul className="flex flex-col gap-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex items-center justify-between py-3 px-4 shadow-custom rounded-2xl gap-4"
          >
            <div className="flex flex-col gap-0.5">
              <p className="font-bold md:text-lg line-clamp-1">{post.title}</p>
              <p className="font-semibold md:text-sm text-xs text-slate-700">
                {post.place}ㆍ{post.location.split(' ')[2]}
              </p>
              <p className="font-bold md:text-lg text-pirmary-500">
                {post.pay.toLocaleString()}원ㆍ시급{' '}
                {parseInt(
                  (post.pay / post.totalHours).toFixed(0)
                ).toLocaleString()}
                원
              </p>
              <p className="font-semibold  md:text-sm text-xs text-slate-700">
                {formatDateToKoreanShort(post.date)}ㆍ{post.startTime} ~{' '}
                {post.endTime}ㆍ{post.totalHours}시간
              </p>
            </div>
            <img
              src={placeholder}
              width="120px"
              className="rounded-2xl md:size-28 size-26"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export { JobPostsList };
