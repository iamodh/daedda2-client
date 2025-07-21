import { Button } from '@/components/ui/button/button';
import { Input } from '@/components/ui/form/input';
import { InputImage } from '@/components/ui/form/input-image';

const JobPostNewRoute = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Input label="제목" />
        <div>위치 지도</div>
        <Input label="가게 이름" />
        <InputImage label="근무지 사진" />
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        <Input label="근무 날짜" type="date" />
        <Input label="시작 시간" />
        <Input label="마치는 시간" />
        <Input label="일당" />
      </div>
      <Button>등록</Button>
      <Button variant={'outline'}>취소</Button>
    </form>
  );
};

export default JobPostNewRoute;
