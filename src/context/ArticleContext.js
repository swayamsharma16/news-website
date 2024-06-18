import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let apiUrl = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=99&apikey=${process.env.REACT_APP_NEWS_API_KEY}`;

        if (selectedCategory) {
          apiUrl += `&q=${selectedCategory}`;
        }

        const response = await axios.get(apiUrl);

        const filteredArticles = response.data.articles.filter(
          (article) => article.image && article.description && article.title
        );

        setItems(filteredArticles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchArticles();
  }, [selectedCategory]);

  return (
    <ArticleContext.Provider value={{ items, setSelectedCategory }}>
      {children}
    </ArticleContext.Provider>
  );
};
