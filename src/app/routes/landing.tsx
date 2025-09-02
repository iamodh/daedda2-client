import { Button } from '@/components/ui/button';
import { paths } from '@/config/paths';
import { useDelayStore } from '@/store/delay';
import { useNavigate } from 'react-router';

const LandingRoute = () => {
  const navigate = useNavigate();
  const { enable, disable } = useDelayStore();
  const handleUseApp = async () => {
    disable();
    navigate(paths.auth.login.getHref());
  };

  const handleUxTest = async () => {
    enable();
    navigate(paths.auth.login.getHref());
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-2xl font-semibold">대따</h1>
        <p>
          "대따(Daedda)"는 갑작스럽게 필요한 대타 인력의 구인/구직을 위한
          플랫폼으로,
        </p>
        <p>
          <span className="text-pirmary-500">원하는 공고에 대한 지원</span>부터{' '}
          <span className="text-pirmary-500">수당 입금</span>까지 아르바이트 전
          과정을 간편하게 관리할 수 있는 서비스입니다.
        </p>
      </div>
      <div className="flex gap-4 bg-amber-100">
        <Button size={'lg'} onClick={handleUseApp}>
          앱 사용하기
        </Button>
      </div>
      <p>
        대따는 네트워크 로딩시 알맞은 UI를 제공하여{' '}
        <span className="text-pirmary-500">끊김 없는 사용자 경험</span>을
        제공합니다.
      </p>
      <p>인터넷 연결을 의도적으로 지연한 환경에서 이를 확인해보세요.</p>
      <Button variant={'secondary'} size={'lg'} onClick={handleUxTest}>
        UX 테스트
      </Button>
    </div>
  );
};

export default LandingRoute;
