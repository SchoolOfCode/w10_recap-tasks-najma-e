import React from "react";
import articles from "../../libs/articles";
import Comment from "../Comment/Comment";
import LikeButton from "../LikeButton/LikeButton";
import Paragraph from "../Paragraph/Paragraph";

function Article() {
  return (
    <>
      {articles.map((article) => {
        return (
          <article key={article.id} className="post">
            <h2>{article.title}</h2>
            {article.paragraphs.map((paragraph) => {
              return <Paragraph id={paragraph.id} text={paragraph.text} />;
            })}
            <LikeButton />
            {article.comments.map((comment) => {
              return (
                <Comment
                  name={comment.name}
                  id={comment.id}
                  text={comment.text}
                />
              );
            })}
          </article>
        );
      })}
    </>
  );
}

export default Article;
