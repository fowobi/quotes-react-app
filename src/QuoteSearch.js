import React, { useState } from "react";

function QuoteSearch({ quotes }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredQuotes = quotes.filter(
      (quote) =>
        quote.quote.toLowerCase().includes(e.target.value.toLowerCase()) ||
        quote.author.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredQuotes);
  };

  return (
    <div>
      <h2>Quote Search</h2>
      <input
        type="text"
        placeholder="Search by quote or author..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map((quote, index) => (
          <li key={index}>
            <blockquote>
              <p>{quote.quote}</p>
              <footer>{quote.author}</footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuoteSearch;

