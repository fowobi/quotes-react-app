import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import RandomQuote from "./RandomQuote";
import QuoteSearch from "./QuoteSearch";
import AddQuote from "./AddQuote";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // Fetch quotes data from the server when the component mounts
    fetch("https://tosin-quote-server.glitch.me/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  }, []);

  const handleAddQuote = (newQuote) => {
    // Update the quotes state with the newly added quote
    setQuotes([...quotes, newQuote]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Random Quote</Link>
            </li>
            <li>
              <Link to="/search">Search Quotes</Link>
            </li>
            <li>
              <Link to="/add">Add Quote</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<RandomQuote />} />
          <Route path="/search" element={<QuoteSearch quotes={quotes} />} />
          <Route
            path="/add"
            element={<AddQuote onAddQuote={handleAddQuote} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

