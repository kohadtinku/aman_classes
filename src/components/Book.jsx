import React, { useState } from "react";
import "../style/book.css";

const Book = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [
    {
      type: "cover-front",
      onClick: () => movePage(1),
      content: (
        <div>
          <h1>Mrs. Dalloway</h1>
          <div className="hat">
            <i className="fab fa-pied-piper-hat"></i>
          </div>
          <h2>Virginia Woolf</h2>
        </div>
      ),
    },
    // Add more pages here
    {
      type: "cover-front",
      onClick: () => movePage(2),
      content: (
        <div>
          <h1>Mrs. Dalloway</h1>
          <div className="hat">
            <i className="fab fa-pied-piper-hat"></i>
          </div>
          <h2>Virginia Woolf</h2>
        </div>
      ),
    },
    // Add more pages here
    {
      type: "cover-front",
      onClick: () => movePage(3),
      content: (
        <div>
          <h1>Mrs. Dalloway</h1>
          <div className="hat">
            <i className="fab fa-pied-piper-hat"></i>
          </div>
          <h2>Virginia Woolf</h2>
        </div>
      ),
    },
    // Add more pages here
  ];

  const movePage = (page) => {
    if (page === currentPage) {
      currentPage += 2;
    } else if (page === currentPage - 1) {
      currentPage -= 2;
    }
    setCurrentPage(currentPage);
  };

  const toggleClass = (e, toggleClassName) => {
    const classList = e.classList;
    if (classList.contains(toggleClassName)) {
      classList.remove(toggleClassName);
    } else {
      classList.add(toggleClassName);
    }
  };

  return (
    <div className="book">
      {pages.map((page, index) => (
        <div
          key={index}
          className={`page ${page.type} ${
            currentPage === index + 1 ? "left-side" : ""
          }`}
          onClick={() => page.onClick()}
        >
          {page.content}
        </div>
      ))}
      {Array.from({ length: 94 }, (_, index) => (
        <div key={index} className="page"></div>
      ))}
    </div>
  );
};

export default Book;
