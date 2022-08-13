import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="africa" element={<Africa />} />
      <Route path="america" element={<America />} />
      <Route path="europe" element={<Europe />} />
      <Route path="asia" element={<Asia />} /> */}
    </Routes>
  </BrowserRouter>
);
