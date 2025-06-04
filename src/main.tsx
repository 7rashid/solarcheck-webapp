import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Formular from "./pages/Formular";
import Ergebnis from "./pages/Ergebnis";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/formular" element={<Formular />} />
        <Route path="/ergebnis" element={<Ergebnis />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);