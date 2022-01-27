import React from "react";
import MyButton from "./ui/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton className="post__btn">Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
