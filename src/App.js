import "./App.css";

import React, { useRef, useState } from "react";

import "./styles/index.sass";
import PostList from "./components/PostList";

import NewPostForm from "./components/NewPostForm";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Angular", body: "Description" },
    { id: 3, title: "Java", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <NewPostForm create={createPost} />
      {posts.length === 0 ? (
        <h1 className="noPosts">Посты не найдены!</h1>
      ) : (
        <PostList posts={posts} remove={removePost} title="Список постов 1" />
      )}
    </div>
  );
};

export default App;
