import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { blogpostId } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts/${blogpostId}`
    )
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  const [author, setAuthor] = useState({});

  useEffect(() => {
    fetch(`https://api.slingacademy.com/v1/sample-data/users/${blogpostId}`)
      .then((response) => response.json())
      .then((data) => setAuthor(data));
  }, []);

  let authorName = author?.user?.first_name + " " + author?.user?.last_name;

  const fullDate = new Date(post?.blog?.created_at);
  let publishDate = fullDate.toUTCString().substring(3, 16);

  return (
    <div className="blog container px-0">
      <div className="text-center row mt-5 mx-0">
        <h1 className="blog-title mt-4">{post?.blog?.title}</h1>
        <p className="publish-info mt-3">
          By: {authorName}
          {publishDate}
        </p>
        <hr className="mt-2"></hr>
      </div>
      <div className="mt-1">
        <img src={post?.blog?.photo_url} className="blog-img pt-2"></img>
        <article className="blog-text">{post?.blog?.content_text}</article>
      </div>
    </div>
  );
};

export default Blog;
