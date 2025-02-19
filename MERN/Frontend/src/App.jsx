import { useState } from "react";

import "./App.css";

import CreateComponent from "./components/CreateComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CreateComponent />
    </>
  );
}

export default App;
