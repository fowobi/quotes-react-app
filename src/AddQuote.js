import React, { useState, useEffect } from "react";
import config from "./config";

const apiUrl = process.env.REACT_APP_API_URL || config.apiUrl;

function AddQuote({ onAddQuote }) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [dateAdded, setDateAdded] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuote = { quote, author };
    fetch(`${apiUrl}/quotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuote),
    })
      .then((response) => response.json())
      .then((data) => {
        setDateAdded(data.dateAdded);
        onAddQuote(data);
      });

    setQuote("");
    setAuthor("");
  };

  useEffect(() => {
    if (dateAdded) {
      const timer = setTimeout(() => {
        setDateAdded(null);
      }, 3000);

      // Cleanup the timer if the component is unmounted or dateAdded changes
      return () => clearTimeout(timer);
    }
  }, [dateAdded]);

  return (
    <div>
      <h2 className="add-new-quote">Add New Quote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="author-p" htmlFor="quote">
            Quote:{" "}
          </label>
          <input
            type="text"
            id="quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
        </div>
        <div>
          <label className="author-p" htmlFor="author">
            Author:{" "}
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Quote</button>
      </form>
      {dateAdded && (
        <p className="date-added">
          Quote added on: {dateAdded}
        </p>
      )}
    </div>
  );
}

export default AddQuote;
