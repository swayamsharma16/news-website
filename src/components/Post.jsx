import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "./BlogPage/Header";
import Content from "./BlogPage/Content";
import { ArticleContext } from "../context/ArticleContext";

const Post = () => {
  const { id } = useParams();
  const { items } = useContext(ArticleContext);

  const article = items.find((item) => item.title === decodeURIComponent(id));

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header
        title={article.title}
        date={new Date(article.publishedAt).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })}
        author={article.source.name}
      />
      <Content
        img={article.image}
        description={article.description}
        date={article.publishedAt}
        content={article.content}
      />
    </div>
  );
};

export default Post;
