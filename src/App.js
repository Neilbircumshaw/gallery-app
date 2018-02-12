import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavMenu from "./NavMenu";
import Photos from "./Photos";
import Search from './Search';
import NotFound from './NotFound';




class App extends Component {

  render() {
    return (

<BrowserRouter>

<div className="App">
  <div className='App-header'>
    <h1 className='App-title'>Flickr Search App</h1>
  </div>
<NavMenu />

<Switch>
<Route exact path="/" component = {Photos}/>
<Route exact path="/search" component = {Search}/>
<Route path="/search/:searchTerm" component = {Photos} />
<Route  component = {NotFound}/>
</Switch>

</div>

</BrowserRouter>

    );
  }

}

export default App;
