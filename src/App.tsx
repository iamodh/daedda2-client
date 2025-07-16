import axios from "axios";
import { useEffect, useState } from "react";

interface IPost {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [posts, setPosts] = useState<IPost[]>();
  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const response = await axios.get<IPost[]>("http://localhost:3000/posts");
    setPosts(response.data);
  }

  return (
    <>
      <div>Hello world</div>
      {posts && (
        <ul>
          {posts.map((post) => (
            <li>
              <p>{post.title}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
