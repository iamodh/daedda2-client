// 공통 유틸리티
export type BaseEntity = {
  id: number;
  createdAt: string;
};

export type Entity<T> = T & BaseEntity;

// 도메인 엔티티
export type User = Entity<{
  username: string;
  nickname: string;
  phone: string;
  email: string;
  isSocial: boolean;
  imageUrl: string;
}>;

export type JobPost = Entity<{
  title: string;
  location: string;
  pay: number;
  date: string; // ISO 문자열 또는 Date → 백엔드 응답 기준
  startTime: string; // 'HH:mm' 형식
  endTime: string; // 'HH:mm' 형식
  totalHours: number;
  place: string;
  imageUrl: string;
  content: string;
  hourlyWage: number;
  user?: JobPostAuthor;
  userId: number;
}>;

export type JobPostAuthor = {
  id: number;
  nickname: string;
  imageUrl?: string;
};

// 응답 DTO
export type AuthResponse = {
  access_token: string;
};
