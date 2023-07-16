// // import React, { useState, useEffect } from "react";

// // function App() {
// //   const [quote, setQuote] = useState("");

// //   useEffect(() => {
// //     fetch("https://tosin-quote-server.glitch.me/quotes/random")
// //       .then((response) => response.json())
// //       .then((data) => setQuote(`${data.quote} - ${data.author}`));
// //   }, []);

// //   const handleNewQuote = () => {
// //     fetch("https://tosin-quote-server.glitch.me/quotes/random")
// //       .then((response) => response.json())
// //       .then((data) => setQuote(`${data.quote} - ${data.author}`));
// //   };

// //   return (
// //     <div>
// //       <h1 className="r-quote">Random Quote:</h1>
// //       <p className ="p-quotes" onClick={handleNewQuote}>{quote}</p>
// //     </div>
// //   );
// // }

// // export default App;

// // import React, { useState } from "react";

// // function App() {
// //   const [quote, setQuote] = useState("");
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [searchResults, setSearchResults] = useState([]);

// //   const handleNewQuote = () => {
// //     fetch("https://tosin-quote-server.glitch.me/quotes/random")
// //       .then((response) => response.json())
// //       .then((data) => setQuote(`${data.quote} - ${data.author}`));
// //   };

// //   const handleSearch = () => {
// //     fetch("https://tosin-quote-server.glitch.me/quotes")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         const filteredQuotes = data.filter(
// //           (quote) =>
// //             quote.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //             quote.author.toLowerCase().includes(searchTerm.toLowerCase())
// //         );
// //         setSearchResults(filteredQuotes);
// //       });
// //   };

// //   return (
// //     <div>
// //       <h1 className="r-quote">Random Quote:</h1>
// //       <p className="p-quotes" onClick={handleNewQuote}>
// //         {quote}
// //       </p>

// //       <div>
// //         <h2>Search for Quotes</h2>
// //         <input
// //           type="text"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //         />
// //         <button onClick={handleSearch}>Search</button>
// //         <div>
// //           {searchResults.map((result) => (
// //             <p key={result.id}>
// //               {result.quote} - {result.author}
// //             </p>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;



// import React from "react";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"; // Import 'Routes' as well
// import RandomQuote from "./RandomQuote";
// import QuoteSearch from "./QuoteSearch";

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Random Quote</Link>
//             </li>
//             <li>
//               <Link to="/search">Search Quotes</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           {" "}
//           {/* Use 'Routes' instead of 'Route' */}
//           <Route path="/" element={<RandomQuote />} />{" "}
//           {/* Use 'element' instead of 'component' */}
//           <Route path="/search" element={<QuoteSearch />} />{" "}
//           {/* Use 'element' instead of 'component' */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import RandomQuote from "./RandomQuote";
// import QuoteSearch from "./QuoteSearch";
// import AddQuote from "./AddQuote"; // Import the new component

// function App() {
//   const [quotes, setQuotes] = useState([]);

//   const handleAddQuote = (newQuote) => {
//     setQuotes([...quotes, newQuote]);
//   };

//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Random Quote</Link>
//             </li>
//             <li>
//               <Link to="/search">Search Quotes</Link>
//             </li>
//             <li>
//               <Link to="/add">Add Quote</Link> {/* New link */}
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<RandomQuote />} />
//           <Route
//             path="/search"
//             element={<QuoteSearch quotes={quotes} />} // Pass the 'quotes' data to the QuoteSearch component
//           />
//           <Route
//             path="/add"
//             element={<AddQuote onAddQuote={handleAddQuote} />} // Pass the 'handleAddQuote' function to the AddQuote component
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


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

