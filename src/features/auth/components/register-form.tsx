import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/form/input';
import placeholder from '@/assets/images/placeholder-user.png';
import { Dividor } from '@/components/ui/form/dividor';

export const RegisterForm = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <span className="text-xl">{}환영합니다!</span>
      <div className="flex flex-col items-center">
        <img src={placeholder} className="w-30" />
      </div>
      <form className="w-full flex flex-col gap-4">
        <Input label="아이디" placeholder="abcd1234" />
        <Input label="비밀번호" placeholder="4321dcba" />
        <Input label="닉네임" placeholder="대따몬123" />
        <Input label="전화번호" placeholder="010-1234-5678" />
        <Input label="이메일" type="email" placeholder="dda123@gmail.com" />
        <div className="flex gap-4">
          <Button variant="secondary">취소</Button>
          <Button>회원가입</Button>
        </div>
      </form>
    </div>
  );
};
