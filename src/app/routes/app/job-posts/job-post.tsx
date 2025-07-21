import { useParams } from 'react-router';

const JobPostRoute = () => {
  const { jobPostId } = useParams();
  console.log(jobPostId);
  return <div>job post: {jobPostId}</div>;
};

export default JobPostRoute;
