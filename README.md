
<div align="center"><img width="280" height="80" alt="logo" src="https://github.com/user-attachments/assets/3bb218af-0827-472d-a6e3-37d98b68d00e" /></div>

<br/>

<p align="center">"대따(Daedda)"는 갑작스럽게 필요한 대타 인력을 빠르게 구할 수 있는 초단기 아르바이트 플랫폼입니다.</p>

<p align="center">지원부터 입금까지 아르바이트 전 과정을 간편하게 관리할 수 있습니다.</p>

<p align="center"><a href="https://daedda2.vercel.app/auth/login" align="center"> 👉 서비스 바로가기 </a></p>

<br/>

## ✨ Features

- 회원가입 및 로그인 (JWT 인증)

- 구인글 CRUD (작성, 수정, 삭제, 조회)

- 필터링 & 무한 스크롤 (지역, 근무 시간, 시급 조건 등)

- 지원자 관리 (지원 신청 / 승인 / 거절)

- 시딩 데이터 제공 → 테스트 계정으로 즉시 체험 가능

- E2E 테스트 (게시글 작성 및 지원 플로우 자동화)


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

## 📌 Why This Project?

단순 CRUD가 아니라 실제 배포 & 테스트가 완료된 서비스

테스트 자동화로 리팩토링 안정성 확보

모듈화된 아키텍처 적용 → 유지보수와 확장성 고려

실제 서비스 운영 환경 (AWS EC2 + Reverse Proxy) 경험
