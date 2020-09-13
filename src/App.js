import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom'
import './App.css';
import BoatApp from './components/BoatApp.jsx';

class App extends Component {
  render() {
    return (
    	<div className="container " >
    		<BoatApp />
    	</div>
    );
  }
}

export default App;
