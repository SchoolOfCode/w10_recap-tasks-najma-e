import React from "react";
import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons/lib/icons";
import css from "./LikeButton.module.css";

function LikeButton() {
  /* const [colour, setColour] = useState({ backgroundColor: "red" }); */

  /*  function changeColour() {
    setColour({ bgColor: "red" });
  } */

  return (
    <Button
      //onClick={changeColour}
      className={css.btn}
      type="primary"
      icon={<HeartOutlined style={{ color: "brown" }} />}
    ></Button>
  );
}

export default LikeButton;
