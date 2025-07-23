import { useParams } from 'react-router';

const JobPostRoute = () => {
  const { jobPostId } = useParams();
  return (
    <div>
      <div>
        <div>타이틀과 구인 날짜</div>
        <div>구인글 작성자 정보, 북마크, 수정 삭제 버튼</div>
        <div>가게 이름</div>
        <div>위치 정보</div>
        <div>근무지 사진</div>
      </div>
      <div>근무 날짜</div>
      <div>시작시간, 마치는 시간</div>
      <div>일당, 시급</div>
      <div>근무 내용</div>
    </div>
  );
};

export default JobPostRoute;
