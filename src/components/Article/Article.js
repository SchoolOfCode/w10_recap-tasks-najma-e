import React from "react";
import articles from "../../libs/articles";
import Comment from "../Comment/Comment";
import Paragraph from "../Paragraph/Paragraph";
import css from "./Article.module.css";
import LikeButton from "../LikeButton/LikeButton";

function Article() {
  return (
    <>
      {articles.map((article) => {
        return (
          <article key={article.id} className={css.post}>
            <h2 className={css.title}>{article.title}</h2>
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
