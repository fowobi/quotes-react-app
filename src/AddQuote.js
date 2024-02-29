import React, { useState } from "react";

function AddQuote({ onAddQuote }) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the new quote and author to the parent component (App)
    onAddQuote({ quote, author });
    // Clear the input fields after submitting
    setQuote("");
    setAuthor("");
  };

  return (
    <div>
      <h2 className="add-new-quote">Add New Quote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="author-p"htmlFor="quote">
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
        <button type="submit" >Add Quote</button>
      </form>
    </div>
  );
}

export default AddQuote;
