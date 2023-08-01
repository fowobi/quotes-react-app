// import React, { useState, useEffect } from "react";
// import API_URL from "./config";

// function RandomQuote() {
//   const [quote, setQuote] = useState("");

//   useEffect(() => {
//     fetch(`${API_URL}/quotes/random`)
//       .then((response) => response.json())
//       .then((data) => setQuote(`${data.quote} | ${data.author}`));
//   }, []);

//   const handleNewQuote = () => {
//     fetch(`${API_URL}/quotes/random`)
//       .then((response) => response.json())
//       .then((data) => setQuote(`${data.quote} | ${data.author}`));
//   };

//   return (
//     <div>
//       <h1 className="r-quote">Random Quote:</h1>
//       <p className="p-quotes" onClick={handleNewQuote}>
//         {quote}
//       </p>
    
//     </div>
//   );
// }

// export default RandomQuote;


import React, { useState, useEffect } from "react";
import API_URL from "./config";

function RandomQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/quotes/random`)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  }, []);

  const handleNewQuote = () => {
    fetch(`${API_URL}/quotes/random`)
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
