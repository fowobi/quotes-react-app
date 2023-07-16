import React, { useState, useEffect } from "react";

function RandomQuote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://tosin-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(`${data.quote} - ${data.author}`));
  }, []);

  const handleNewQuote = () => {
    fetch("https://tosin-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => setQuote(`${data.quote} - ${data.author}`));
  };

  return (
    <div>
      <h1 className="r-quote">Random Quote:</h1>
      <p className="p-quotes" onClick={handleNewQuote}>
        {quote}
      </p>
    </div>
  );
}

export default RandomQuote;
