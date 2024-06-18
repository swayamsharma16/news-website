import React, { useState, useContext } from "react";
import { ArticleContext } from "./context/ArticleContext";
import Article from "./components/Article";
import Pagination from "./components/Pagination";

function App() {
  const { items, setSelectedCategory } = useContext(ArticleContext);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategoryLocal, setSelectedCategoryLocal] = useState("");

  const articlesPerPage = 5;

  const filteredNewsArticles = items.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredNewsArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedCategoryLocal(category);
    setSearch("");
  };

  return (
    <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
      <div className="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
        <div className="col-lg-5 col-md-4">
          <h1 className="mb-2 mb-md-0">News App</h1>
        </div>
        <div className="col-lg-7 col-md-8">
          <div className="row gy-2">
            <div className="col-lg-5 col-sm-6">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center me-sm-4 "></div>
                <select
                  className="form-select"
                  value={selectedCategoryLocal}
                  onChange={handleCategoryChange}
                >
                  <option value="">All Categories</option>
                  <option value="politics">Politics</option>
                  <option value="entertainment">Hollywood</option>
                  <option value="technology">Technology</option>
                  <option value="sports">Sports</option>
                  <option value="business">Business</option>
                </select>
              </div>
            </div>
            <div className="col-lg-7 col-sm-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control pe-5 rounded"
                  placeholder="Search the News Articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <i className="bx bx-search position-absolute top-50 end-0 translate-middle-y me-3 zindex-5 fs-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {currentArticles.map((item, index) => (
        <Article
          key={index}
          articleImage={item.image}
          title={item.title}
          description={item.description}
          avatarImage={index}
          date={new Date(item.publishedAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        />
      ))}

      <Pagination
        totalPages={Math.ceil(filteredNewsArticles.length / articlesPerPage)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

export default App;
