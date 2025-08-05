import { AuthLayout } from '@/components/layouts/auth-layout';
import logo from '@/assets/logo.png';
import ddamon from '@/assets/ddamon.png';
import { Input } from '@/components/ui/form/input';
import { Button } from '@/components/ui/button';
import kakao from '@/assets/icons/kakao.svg';
const LoginRoute = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center bg-amber-100 h-screen justify-center gap-4">
        <div className="flex flex-col items-center">
          <img src={logo} className="w-50" />
          <img src={ddamon} className="w-30" />
        </div>
        <form className="w-full flex flex-col gap-4">
          <Input placeholder="아이디" />
          <Input placeholder="비밀번호" />
          <Button type="submit">로그인</Button>
          <Button icon={<img src={kakao} />} variant="kakao" type="button">
            카카오 로그인
          </Button>
        </form>
        <div className="text-sm">
          <span>처음 이용하시나요? </span>
          <span>회원가입</span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginRoute;
