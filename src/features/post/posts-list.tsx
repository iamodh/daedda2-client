import placeholder from '@/assets/images/placeholder.png';

export interface IPost {
  id: string;
  title: string;
  location: string;
  pay: number;
  date: string;
  startTime: string;
  endTime: string;
  imageUrl: string;
  place: string;
  totalHours: number;
}

const dummyPosts: IPost[] = [
  {
    id: '1',
    title: '기장대게 할인마트 홀 서빙 대타 구함!',
    location: '부산광역시 기장군 민락동',
    pay: 90000,
    date: '2024-12-19',
    startTime: '10:00',
    endTime: '16:00',
    imageUrl: 'https://your-cdn.com/images/kijang-crab-mart.jpg',
    place: '기장대게할인마트',
    totalHours: 6,
  },
  {
    id: '2',
    title: '홍대 뷔페 식당 점심 서빙 알바 모집',
    location: '서울 마포구 홍익로 5길',
    pay: 75000,
    date: '2024-12-20',
    startTime: '11:00',
    endTime: '15:00',
    imageUrl: 'https://your-cdn.com/images/hongdae-buffet.jpg',
    place: '홍대푸드뷔페',
    totalHours: 4,
  },
  {
    id: '3',
    title: '이마트24 계산대 단기 알바',
    location: '서울 강남구 역삼동',
    pay: 60000,
    date: '2024-12-21',
    startTime: '09:00',
    endTime: '13:00',
    imageUrl: 'https://your-cdn.com/images/emart24.jpg',
    place: '이마트24 역삼점',
    totalHours: 4,
  },
  {
    id: '4',
    title: '카페 알바 급구 - 음료 서빙 및 정리',
    location: '서울 송파구 잠실동',
    pay: 50000,
    date: '2024-12-20',
    startTime: '14:00',
    endTime: '18:00',
    imageUrl: 'https://your-cdn.com/images/cafe-job.jpg',
    place: '카페 노블레스',
    totalHours: 4,
  },
  {
    id: '5',
    title: '편의점 야간 정리 및 계산',
    location: '인천 부평구 부평동',
    pay: 65000,
    date: '2024-12-19',
    startTime: '22:00',
    endTime: '02:00',
    imageUrl: 'https://your-cdn.com/images/convenience-night.jpg',
    place: 'GS25 부평중앙점',
    totalHours: 4, // 다음날 2시까지이므로 4시간
  },
  {
    id: '6',
    title: '식당 주방보조 단기 아르바이트',
    location: '부산 해운대구 우동',
    pay: 80000,
    date: '2024-12-22',
    startTime: '09:00',
    endTime: '15:00',
    imageUrl: 'https://your-cdn.com/images/kitchen-helper.jpg',
    place: '해운대 국수집',
    totalHours: 6,
  },
  {
    id: '7',
    title: '행사 도우미 모집 (백화점 팝업존)',
    location: '서울 강남구 신사동',
    pay: 100000,
    date: '2024-12-23',
    startTime: '10:00',
    endTime: '17:00',
    imageUrl: 'https://your-cdn.com/images/event-helper.jpg',
    place: '현대백화점 신사점',
    totalHours: 7,
  },
  {
    id: '8',
    title: '서점 진열 보조 알바',
    location: '대구 중구 동성로',
    pay: 40000,
    date: '2024-12-20',
    startTime: '13:00',
    endTime: '17:00',
    imageUrl: 'https://your-cdn.com/images/bookstore-job.jpg',
    place: '동성로문고',
    totalHours: 4,
  },
  {
    id: '9',
    title: '마트 시식코너 단기 알바',
    location: '광주 서구 치평동',
    pay: 70000,
    date: '2024-12-21',
    startTime: '10:00',
    endTime: '16:00',
    imageUrl: 'https://your-cdn.com/images/sample-counter.jpg',
    place: '홈플러스 광주점',
    totalHours: 6,
  },
  {
    id: '10',
    title: '영화관 티켓/매점 스태프 알바',
    location: '서울 용산구 한강로동',
    pay: 60000,
    date: '2024-12-19',
    startTime: '12:00',
    endTime: '17:00',
    imageUrl: 'https://your-cdn.com/images/cinema-job.jpg',
    place: 'CGV 용산아이파크몰',
    totalHours: 5,
  },
];

const PostsList = () => {
  return (
    <>
      <ul className="flex flex-col gap-4">
        {dummyPosts.map((post) => (
          <li className="flex items-center justify-between py-3 px-4 shadow-custom rounded-2xl">
            <div className="flex flex-col gap-0.5">
              <p className="font-bold md:text-lg line-clamp-1">{post.title}</p>
              <p className="font-semibold md:text-sm text-xs text-slate-700">
                {post.place}ㆍ{post.location.split(' ')[2]}
              </p>
              <p className="font-bold md:text-lg text-pirmary">
                {post.pay.toLocaleString()}원ㆍ시급{' '}
                {(post.pay / post.totalHours).toFixed(0).toLocaleString()}원
              </p>
              <p className="font-semibold  md:text-sm text-xs text-slate-700">
                {post.date}ㆍ{post.startTime} ~ {post.endTime}ㆍ
                {post.totalHours}시간
              </p>
            </div>
            <img
              src={placeholder}
              width="120px"
              className="rounded-2xl md:size-28 size-26"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export { PostsList };
