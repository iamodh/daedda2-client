import { Button } from '@/components/ui/button/button';
import { Input } from '@/components/ui/form/input';
import { InputImage } from '@/components/ui/form/input-image';
import axios from 'axios';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface newPostInputs {
  title: string;
  location?: string;
  pay: string;
  date: string; // ISO 문자열 또는 Date → 백엔드 응답 기준
  startTime: string; // 'HH:mm' 형식
  endTime: string; // 'HH:mm' 형식
  place: string;
  imageUrl?: string | null;
  totalHours: number;
}

const JobPostNewRoute = () => {
  const { register, handleSubmit } = useForm<newPostInputs>();

  const onSumbit: SubmitHandler<newPostInputs> = (values) => {
    const totalHours = Math.round(
      (parseInt(values.endTime.replace(':', '')) -
        parseInt(values.startTime.replace(':', ''))) /
        100
    );

    const newPost = {
      ...values,
      location: '임시 위치 데이터',
      totalHours,
      imageUrl: null,
    };

    axios.post('http://localhost:4000/job-posts', newPost);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSumbit)}>
      <div className="flex flex-col gap-2">
        <Input
          label="제목"
          registration={register('title')}
          placeholder="편의점 대타 구합니다."
        />
        <div>위치 지도</div>
        <Input
          label="가게 이름"
          registration={register('place')}
          placeholder="CU 이태원점"
        />
        <InputImage label="근무지 사진" />
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        <Input label="근무 날짜" type="date" registration={register('date')} />
        <Input
          label="시작 시간"
          registration={register('startTime')}
          placeholder="13:30"
        />
        <Input
          label="마치는 시간"
          registration={register('endTime')}
          placeholder="20:00"
        />
        <Input
          label="일당"
          registration={register('pay')}
          placeholder="80000"
        />
      </div>
      <Button>등록</Button>
      <Button variant={'outline'}>취소</Button>
    </form>
  );
};

export default JobPostNewRoute;
