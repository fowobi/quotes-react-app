import React, { useState, useEffect } from "react";
import config from "./config";

const apiUrl = process.env.REACT_APP_API_URL || config.apiUrl;

function RandomQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch(`${apiUrl}/quotes/random`)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  }, []);

  const handleNewQuote = () => {
    fetch(`${apiUrl}/quotes/random`)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  };

  return (
    <div>
      <h1 className="r-quote">Random Quote:</h1>
      <p className="p-quotes" onClick={handleNewQuote}>
        {quote} <span className="separator">|</span>{" "}
        <span className="author">{author}</span>
      </p>
    </div>
  );
}

export default RandomQuote;
