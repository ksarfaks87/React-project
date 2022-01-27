import React, { useState } from "react";
import MyButton from "./ui/button/MyButton";
import MyInput from "./ui/input/MyInput";

const NewPostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form className="addForm" action="" onSubmit={addNewPost}>
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
        type="text"
        placeholder="Название поста"
      />

      <MyInput
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        value={post.body}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton>Создать пост</MyButton>
    </form>
  );
};

export default NewPostForm;
