import "./App.css";

import React, { useRef, useState } from "react";

import "./styles/index.sass";
import PostList from "./components/PostList";
import MyButton from "./components/ui/button/MyButton";
import MyInput from "./components/ui/input/MyInput";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Angular", body: "Description" },
    { id: 3, title: "Java", body: "Description" },
  ]);

  const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const descriptionInput = useRef(); //НЕуправляемый инпут
  console.log(title);

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(descriptionInput.current.value); //НЕуправляемый инпут получение данных из инпута
  };

  return (
    <div className="App">
      <form className="addForm" action="" onSubmit={addNewPost}>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <input type="text" ref={descriptionInput} />
        {/* <MyInput
          ref={descriptionInput}
          type="text"
          placeholder="Описание поста"
        /> */}
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
};

export default App;
