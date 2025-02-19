import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ShowComponents from "./components/ShowComponents";

import App from "./App";

export default function Index() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/show" element={<ShowComponents />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
createRoot(document.getElementById("root")).render(<Index />);
