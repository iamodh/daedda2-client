import { Input } from '@/components/ui/form/input';
import { InputImage } from '@/components/ui/form/input-image';

const JobPostNewRoute = () => {
  return (
    <div className="flex flex-col gap-2">
      <Input label="제목" />
      <div>위치</div>
      <Input label="가게 이름" />
      <InputImage label="근무지 사진" />
      <hr />
      <Input label="근무 날짜" type="date" />
      <Input label="시작 시간" />
      <Input label="마치는 시간" />
      <Input label="일당" />
    </div>
  );
};

export default JobPostNewRoute;
