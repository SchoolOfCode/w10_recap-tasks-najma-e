import React from "react";
import css from "./Paragraph.module.css";

function Paragraph({ id, text }) {
  return (
    <div className={css.paragraph}>
      <p key={id}>{text}</p>
    </div>
  );
}

export default Paragraph;
