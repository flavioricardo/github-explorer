import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:username" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
