import { Dividor } from '@/components/ui/form/dividor';
import userPlaceholder from '@/assets/images/placeholder-user.png';
import { Button } from '@/components/ui/button/button';
import { formatDateToKoreanShort } from '@/utils/format';
import { useNavigate } from 'react-router';
import { paths } from '@/config/paths';
import { DeleteJobPost } from '@/features/job-post/components/delete-job-post';
import { useJobPost } from '@/features/job-post/api/get-job-post';
import { useAuth } from '@/lib/auth';
// To Do
// - 제목 section 반응형 텍스트 크기 조절

interface JobPostViewProps {
  jobPostId: string;
}

const JobPostView = ({ jobPostId }: JobPostViewProps) => {
  const navigate = useNavigate();
  const jobPostQuery = useJobPost({ jobPostId });

  const jobPost = jobPostQuery?.data;
  const { user } = useAuth();

  if (!jobPost) return null;
  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-col gap-4">
        <header className="flex justify-between items-center gap-2">
          <h2 className="text-xl font-semibold line-clamp-1">
            {jobPost.title}
          </h2>
          <span className="line-clamp-1">
            {new Date(jobPost.createdAt).toLocaleDateString().slice(2)}
          </span>
        </header>
        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center gap-2">
            <img
              src={jobPost.user?.imageUrl ?? userPlaceholder}
              className="size-10"
            />
            <span>{jobPost.user?.nickname}</span>
          </div>
          {user?.id === jobPost.user?.id && (
            <div className="flex gap-3">
              <Button
                onClick={() =>
                  navigate(paths.app.eidtJobPost.getHref(jobPost.id))
                }
                size="sm"
              >
                수정
              </Button>
              <DeleteJobPost jobPostId={jobPostId} />
            </div>
          )}
        </div>
      </section>
      <Dividor />
      <section className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">🚩근무지 정보</h3>
        <div className="flex flex-col gap-2">
          <div>가게 이름 : {jobPost.place}</div>
          <div className="flex flex-col gap-2">
            <span>위치 정보 : {jobPost.location}</span>
            <div className="h-40 rounded-lg bg-amber-100 flex justify-center items-center">
              카카오 지도
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>근무지 사진</span>
            <img
              src={jobPost.imageUrl}
              width="120px"
              className="rounded-lg md:size-28 size-26"
            />
          </div>
        </div>
      </section>
      <Dividor />
      <section className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">👩‍🍳 아르바이트 정보</h3>
        <ul className="pl-5 list-disc flex flex-col gap-2">
          <li>근무 날짜 : {formatDateToKoreanShort(jobPost.date)}</li>
          <li>
            근무 시간 : {jobPost.startTime} ~ {jobPost.endTime} (
            {jobPost.totalHours}시간)
          </li>
          <li>
            일당 : {jobPost.pay.toLocaleString()}원 (시급 :{' '}
            {(jobPost.pay / jobPost.totalHours).toFixed(0).toLocaleString()}원)
          </li>
          <li>근무 내용 : {jobPost.content}</li>
        </ul>
      </section>
    </div>
  );
};

export { JobPostView };
