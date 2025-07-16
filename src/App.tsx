import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from './stories/Button';

interface IPost {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [posts, setPosts] = useState<IPost[]>();
  const [active, setActive] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const response = await axios.get<IPost[]>('http://localhost:3000/posts');
    setPosts(response.data);
  }

  function handleClick() {
    setActive((prev) => !prev);
  }

  return (
    <>
      <div className="bg-amber-500">Hello world</div>
      {posts && (
        <ul>
          {posts.map((post) => (
            <li>
              <p>{post.title}</p>
            </li>
          ))}
        </ul>
      )}
      <Button
        label="Hello"
        size="large"
        onClick={handleClick}
        primary={active}
      />
    </>
  );
}

export default App;
