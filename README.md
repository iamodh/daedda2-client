
<div align="center"><img width="280" height="80" alt="logo" src="https://github.com/user-attachments/assets/3bb218af-0827-472d-a6e3-37d98b68d00e" /></div>

<br/>

<p align="center">"대따(Daedda)"는 갑작스럽게 필요한 대타 인력을 빠르게 구할 수 있는 초단기 아르바이트 플랫폼입니다.</p>

<p align="center">지원부터 입금까지 아르바이트 전 과정을 간편하게 관리할 수 있습니다.</p>

<p align="center"><a href="https://daedda2.vercel.app/auth/login" target="_blank" align="center"> 👉 서비스 바로가기 </a></p>

<br/>

## ✨ Features
### 개발 완료
- 회원가입 및 로그인
  
- 구인글 CRUD (작성, 수정, 삭제, 조회)

- 필터링 & 무한 스크롤 (지역, 근무 시간, 시급 조건 등)

- 내 정보 수정, 로그아웃

### 개발 예정
- 아르바이트 지원

- 지원자 채택, 거절

- 내 지원 현황 확인

- 아르바이트 비용 입금

## 🛠 Tech Stack

### Frontend

- **Framework & Language**: React, TypeScript, Vite

- **State & Data**: Axios, TanStack Query, Zustand

- **Routing**: React Router

- **Styling**: TailwindCSS (clsx, tailwind-merge, class-variance-authority)

- **Forms**: React Hook Form

- **UI Docs**: Storybook


### Backend

- **Framework**: NestJS

- **Database & ORM**: PostgreSQL, TypeORM

- **Auth & Validation**: JWT, bcrypt, class-validator

- **Data Seeding**: typeorm-extension

### Testing

- **Frontend**: Vitest, React Testing Library, Playwright (E2E)

- **Backend**: Jest (Unit & E2E)

### Deloyment & Infrastructure

- **Client Hosting**: Vercel

- **Server Hosting**: AWS EC2 (Ubuntu, systemd 서비스)

- **Reverse Proxy**: Caddy

- **Database**: PostgreSQL (EC2 내부 설치, RDS 대체 가능)

## 💡 신경 쓴 부분

### 유저 사용성
- React Suspense
- Skeleton UI, Spinner
- Tanstack Query의 suspenseQuery 사용하여 데이터 로딩시에도 끊김없는 UI를 보여주려 노력했습니다.

- 필터 쿼리 url 적용
- local storage에 jwt 저장하여 url 직접 이동 또는 새로고침시에 데이터가 손실되는 SPA의 단점을 보완했습니다.
 
### 안정성
- 백엔드 프론트엔드 단위, e2e 테스트 진행

- 백엔드 단위 테스트 커버리지 90%
- 프론트엔드 실제 유저 동작을 예상하며 스모크 테스트 완료
- 리팩토링시 비즈니스 로직이 정상 동작하는지 자동으로 테스트 할 수 있습니다. (배포 전 테스트 실행하는 CI/CD 추가할 예정)

- storybook을 사용하여 모든 페이지에 공통적으로 사용되는 UI를 문서화하고, 독립적으로 테스트 할 수 있습니다.

### 확장성

- page, ui, features (componenets, api) 나눈 FSD 방식으로 파일을 일관성있게 정리하여 코드 이해도가 높아졌고,
- 데이터 패칭에 사용하는 라이브러리 함수를 분리하여 재사용성을 높였다. (post update에서 post value 가져오는 경우 등)
- 엔티티 type을 하나의 파일에서 관리
- type alias를 통해 확장성 있는 타입 구조 설계
- 유저 인가, 인증과 관련된 로직을 zustand store에서 관리하여 재사용성과 유지보수성을 높였다.

### 보안
- 유저 인증 로직에 JWT, AuthGuard를 활용하여 보안성을 높였다.
- Protected Route를 사용하여 클라이언트에서 인가되지 않은 페이지로의 접근을 막았다.
- react-hook-form, class-validator, typeORM을 활용하여 클라이언트, 서버, 데이터베이스에서의 유효성 검사를 마침

#### 운영/배포

- AWS EC2 인스턴스에서 systemd를 사용하여 백그라운드에서 서버 배포
- Caddy와 sslip.io를 사용해 내부 서버를 감추고 브라우저와 리버스 프록시 서버의 HTTPS 연결 지원
- Vercel에 클라이언트 호스팅
- typeorm extension 사용하여 데이터베이스 시딩 작업 자동화
  
