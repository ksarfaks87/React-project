import "./App.css";

import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <Counter />
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default App;
