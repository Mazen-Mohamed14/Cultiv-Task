import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?limit=6")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="home-background">
      {posts?.blogs?.map((post) => {
        return (
          <div>
            <img src={post.photo_url}></img>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
