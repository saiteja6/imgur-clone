import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import ScrollAwareDiv from './components/Navtest'
// import Searchbar from './components/Search'





function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       
        
      {/* <Searchbar /> */}
        <Navbar />
        <ScrollAwareDiv />
      </header>
    </div>
  );
}

export default App;
