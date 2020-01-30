import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Search from './components/Search';

class App extends Component {
state = {
  value: []
}
render () {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Search/>
    </div>
    
  )
}

};




export default App;
