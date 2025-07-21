import { Input } from '@/components/ui/form/input';

const JobPostNewRoute = () => {
  return (
    <div className="flex flex-col gap-2">
      <Input label="제목" />
      <Input label="가게 이름" />
      <Input label="일당" />
      <Input label="시작 시간" />
      <Input label="마치는 시간" />
    </div>
  );
};

export default JobPostNewRoute;
