import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/Navbar/Nav'
import Cards from '../src/component/Cards/cards';
import data from './card.json'
import { useState } from 'react';
// import Main from './component/Navbar/main';


function App() {
  const [filterAnyState, setFilterAnyState] = useState<[]>([])
  return (
    <div className="App">
       <Nav setFilterAnyState={setFilterAnyState}/>
       <Cards data={data}
       filterAnyState={filterAnyState} />
       

       {/* <Main /> */}
        {/* <hr></hr> */}
      {/* <Cards data={data} />
    */}
    </div>
  );
}

export default App;
