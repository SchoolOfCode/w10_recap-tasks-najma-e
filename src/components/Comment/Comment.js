import React from "react";

function Comment({ name, id, text }) {
  return (
    <div key={id} className="comment">
      <h4>{name} says:</h4>
      <p>{text}</p>
    </div>
  );
}

export default Comment;
