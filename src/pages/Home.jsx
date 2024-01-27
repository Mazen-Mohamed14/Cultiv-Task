import { useEffect, useState } from "react";
import { Post } from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?limit=6")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="album py-5 mt-4 home-background">
      <div className="grid-container">
        <div className="row mx-auto row-cols-lg-2 row-cols-xl-3 g-5">
          {posts?.blogs?.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                source={post.photo_url}
                title={post.title}
                desc={post.description}
                text={
                  post.content_text.slice(
                    0,
                    post.content_text.substring(0, 130).lastIndexOf(".")
                  ) + "."
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
