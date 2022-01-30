import React from "react";
import css from "./Comment.module.css";

function Comment({ name, id, text }) {
  return (
    <div key={id} className={css.comment}>
      <h4>{name} says:</h4>
      <p>{text}</p>
    </div>
  );
}

export default Comment;
