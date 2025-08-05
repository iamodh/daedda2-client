import { Button } from '@/components/ui/button/button';
import { Dividor } from '@/components/ui/form/dividor';
import { Input } from '@/components/ui/form/input';
import { Textarea } from '@/components/ui/form/textarea';
import { InputImage } from '@/components/ui/form/input-image';
import { useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useJobPost } from '@/features/job-post/api/get-job-post';
import {
  useUpdateJobPost,
  type UpdateJobPostInput,
} from '@/features/job-post/api/update-job-post';

interface UpdateJobPostProps {
  jobPostId: string;
}

export const UpdateJobPost = ({ jobPostId }: UpdateJobPostProps) => {
  const navigate = useNavigate();
  const jobPostQuery = useJobPost({ jobPostId });
  const updateJobPostMutation = useUpdateJobPost({ jobPostId });

  const jobPost = jobPostQuery.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UpdateJobPostInput>();

  useEffect(() => {
    if (jobPost) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, createdAt, ...rest } = jobPost;
      reset({ ...rest, date: jobPost?.date.slice(0, 10) });
    }
  }, [jobPost]);

  const onSumbit: SubmitHandler<UpdateJobPostInput> = async (values) => {
    const totalHours = Math.round(
      (parseInt(values.endTime.replace(':', '')) -
        parseInt(values.startTime.replace(':', ''))) /
        100
    );

    const updatedPost = {
      ...values,
      location: '경남 김해시 대청동',
      totalHours,
      imageUrl: null,
      hourlyWage: parseInt((values.pay / totalHours).toFixed(0)),
    };

    updateJobPostMutation.mutate({
      data: updatedPost,
      jobPostId,
    });
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSumbit)}>
      <div className="flex flex-col gap-2">
        <Input
          label="제목"
          registration={register('title', {
            required: '제목은 필수 입력 사항입니다.',
            maxLength: {
              value: 40,
              message: '제목은 40자 이하로 작성되어야 합니다.',
            },
          })}
          placeholder="편의점 대타 구합니다."
          error={errors['title']}
        />
        <div className="flex flex-col gap-2">
          <span className="text-sm">위치 정보</span>
          <div className="h-40 rounded-lg bg-amber-100 flex justify-center items-center">
            카카오 지도
          </div>
          <span className="text-sm">경남 김해시 대청동</span>
        </div>
        <Input
          label="가게 이름"
          registration={register('place', {
            required: '가게 이름은 필수 입력 사항입니다.',
            maxLength: {
              value: 40,
              message: '가게 이름은 40자 이하로 작성되어야 합니다.',
            },
          })}
          placeholder="CU 이태원점"
          error={errors['place']}
        />
        <InputImage label="근무지 사진" />
      </div>
      <Dividor />
      <div className="flex flex-col gap-2">
        <Input
          label="근무 날짜"
          type="date"
          registration={register('date', {
            required: '근무 날짜는 필수 입력 사항입니다.',
          })}
          error={errors['date']}
        />
        <Input
          label="시작 시간"
          registration={register('startTime', {
            required: '시작 시간은 필수 입력 사항입니다.',
            pattern: {
              value: /^([01]\d|2[0-3]):([0-5]\d)$/,
              message: '시작 시간은 HH:MM 형태로 작성되어야 합니다.',
            },
          })}
          placeholder="13:30"
          error={errors['startTime']}
        />
        <Input
          label="마치는 시간"
          registration={register('endTime', {
            required: '마치는 시간은 필수 입력 사항입니다.',
            pattern: {
              value: /^([01]\d|2[0-3]):([0-5]\d)$/,
              message: '마치는 시간은 HH:MM 형태로 작성되어야 합니다.',
            },
          })}
          placeholder="20:00"
          error={errors['endTime']}
        />
        <Input
          type="number"
          label="일당"
          registration={register('pay', {
            required: '일당은 필수 입력 사항입니다.',
            valueAsNumber: true,
          })}
          placeholder="80000"
          error={errors['pay']}
        />
        <Textarea
          label="근무 내용"
          registration={register('content', {
            required: '근무 내용은 필수 입력 사항입니다.',
            minLength: {
              value: 10,
              message: '근무 내용은 최소 10글자 이상 작성하셔야 합니다.',
            },
          })}
          error={errors['content']}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Button type="submit">수정</Button>
        <Button
          type="button"
          variant={'secondary'}
          onClick={() => navigate(-1)}
        >
          취소
        </Button>
      </div>
    </form>
  );
};
