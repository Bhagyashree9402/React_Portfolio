import React from 'react';
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from "./components/Home.js";
import Resume from "./components/Resume";
import { Document,Page } from 'react-pdf';
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

function App() {
  return (
    <>
    
      <CssBaseline/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/React_Portfolio" component={Home}/>
      <Route  path="/resume" component={Resume}/> 
      <Route  path="/portfolio" component={Portfolio}/> 
      <Route  path="/contacts" component={Contact}/> 
    
      
    </>
  );
}

export default App;
