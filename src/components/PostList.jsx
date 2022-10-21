import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <main>
      <h2>All Posts</h2>
      {data &&
        data.map((post, i) => (
          <Link className="post-list" to={`/post/${post?.id}`} key={i}>
            <p className="post-para">{post.title}</p>
          </Link>
        ))}
    </main>
  );
};

export default PostList;
