import React, {useState,useEffect} from "react";
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import News from './components/News'
import Articles from './components/Articles'
import Photos from './components/Photos'






const api_key = 'b736TNVJbkE3uVShRbMJhjc8hpqbmuVcN9sG2zeY'
const apiUrl= 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&page=0&api_key='

function App() {
  return (
    <div className="App">
      < Header/>
      < Nav />
      <div id='main-container'>
        <Articles />
        <Main />
        <News/>
        
      </div>
      
    </div>
  );
}

export default App;
