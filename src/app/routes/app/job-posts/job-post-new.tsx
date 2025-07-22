import { Button } from '@/components/ui/button/button';
import { Dividor } from '@/components/ui/form/dividor';
import { Input } from '@/components/ui/form/input';
import { InputContent } from '@/components/ui/form/input-content';
import { InputImage } from '@/components/ui/form/input-image';
import axios from 'axios';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface newPostInputs {
  title: string;
  location?: string;
  pay: number;
  date: string; // ISO 문자열 또는 Date → 백엔드 응답 기준
  startTime: string; // 'HH:mm' 형식
  endTime: string; // 'HH:mm' 형식
  place: string;
  imageUrl?: string | null;
  totalHours: number;
  content: string;
}

const JobPostNewRoute = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newPostInputs>();

  const onSumbit: SubmitHandler<newPostInputs> = (values) => {
    const totalHours = Math.round(
      (parseInt(values.endTime.replace(':', '')) -
        parseInt(values.startTime.replace(':', ''))) /
        100
    );

    const newPost = {
      ...values,
      location: '임시 위치 테스트',
      totalHours,
      imageUrl: null,
    };

    axios.post('http://localhost:4000/job-posts', newPost);
  };

  return (
    <form onSubmit={handleSubmit(onSumbit)}>
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
        <div>위치 지도</div>
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
        <InputContent
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
      <div className="mt-6 flex flex-col gap-4">
        <Button>등록</Button>
        <Button variant={'secondary'}>취소</Button>
      </div>
    </form>
  );
};

export default JobPostNewRoute;
