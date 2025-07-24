import axios from 'axios';

export const deleteDiscussion = (jobPostId: number) => {
  axios.delete(`http://localhost:4000/job-posts/${jobPostId}`);
};
