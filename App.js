import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import ScrollAwareDiv from './components/Navtest'
import Cards from './components/Tags'
// import Searchbar from './components/Search'





function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       
        
      {/* <Searchbar /> */}
        <Navbar />
        <ScrollAwareDiv />
        <Cards />
      </header>
    </div>
  );
}

export default App;
