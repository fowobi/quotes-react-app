// import React, { useState } from "react";

// function QuoteSearch() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = () => {
//     fetch("https://tosin-quote-server.glitch.me/quotes")
//       .then((response) => response.json())
//       .then((data) => {
//         const filteredQuotes = data.filter(
//           (quote) =>
//             quote.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             quote.author.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setSearchResults(filteredQuotes);
//       });
//   };

//   return (
//     <div>
//       <h2>Search for Quotes</h2>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <div>
//         {searchResults.map((result) => (
//           <p key={result.id}>
//             {result.quote} - {result.author}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default QuoteSearch;


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

