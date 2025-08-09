export type BaseEntity = {
  id: number;
  createdAt: string;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type User = Entity<{
  username: string;
  nickname: string;
  phone: string;
  email: string;
  password: string;
  isSocial: boolean;
  imageUrl: string;
}>;

export type AuthResponse = {
  access_token: string;
};

export type JobPost = Entity<{
  title: string;
  location: string;
  pay: number;
  date: string; // ISO 문자열 또는 Date → 백엔드 응답 기준
  startTime: string; // 'HH:mm' 형식
  endTime: string; // 'HH:mm' 형식
  totalHours: number;
  place: string;
  imageUrl: string | null;
  content: string;
  hourlyWage: number;
  user?: JobPostUserInfo;
}>;

export type JobPostUserInfo = {
  id: number;
  nickname: string;
  imageUrl?: string;
};
