import React, {useState,useEffect} from "react";

import "./App.css";

const api_key = 'b736TNVJbkE3uVShRbMJhjc8hpqbmuVcN9sG2zeY'
const apiUrl= 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&page=0&api_key='

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
