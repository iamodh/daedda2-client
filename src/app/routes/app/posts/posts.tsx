import axios from 'axios';
import { useEffect, useState } from 'react';

interface IPost {
  id: number;
  title: string;
  content: string;
}
const PostsRoute = () => {
  const [posts, setPosts] = useState<IPost[]>();

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const response = await axios.get<IPost[]>('http://localhost:4000/posts');

    if (Array.isArray(response.data)) {
      // 로컬 서버 사용시 올바른 포트에 요청 보냈는지 확인
      setPosts(response.data);
    }
  }

  return (
    <div>
      <h1 className="bg-amber-500">Posts</h1>
      {posts && (
        <ul>
          {posts.map((post) => (
            <li>
              <p>{post.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsRoute;
