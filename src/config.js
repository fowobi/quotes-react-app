// const config = {
 
//     apiUrl: "https://fowobi-quotes-glitch-server.glitch.me",
    
//   };
  
//   export default config;
  
// src/config.js
const isLocalhost = window.location.hostname === "localhost";

const apiUrl = isLocalhost
  ? "http://localhost:45479"
  : "https://fowobi-quotes-glitch-server.glitch.me";

const config = { apiUrl };

export default config;

