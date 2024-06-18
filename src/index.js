import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticleProvider } from "./context/ArticleContext";

import Post from "./components/Post";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ArticleProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </ArticleProvider>
  </Router>
);
