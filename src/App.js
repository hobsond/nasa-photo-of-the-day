import React, {useState,useEffect} from "react";
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import News from './components/News'
import Articles from './components/Articles'
import Photos from './components/Photos'
import * as strap from 'reactstrap'





const api_key = 'b736TNVJbkE3uVShRbMJhjc8hpqbmuVcN9sG2zeY'
const apiUrl= 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&page=0&api_key='

function App() {
  return (
    <div className="App">
      < Header/>
      
      <strap.Jumbotron className='text-center'>
        <strap.Button color='primary'> Do You Like My Site</strap.Button>
      </strap.Jumbotron>

      < Nav />
      <div id='main-container'>
      
        <Main />
        
        
      </div>
      
    </div>
  );
}

export default App;
