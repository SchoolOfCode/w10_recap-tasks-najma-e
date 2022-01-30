import React from "react";

function Paragraph({ id, text }) {
  return (
    <>
      <p key={id}>{text}</p>
    </>
  );
}

export default Paragraph;
