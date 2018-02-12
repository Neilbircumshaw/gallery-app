import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavMenu from "./components/NavMenu";
import Photos from "./components/Photos";
import Search from './components/Search';
import NotFound from './components/NotFound';


//this App component loads the NavMenu component and sets up the routes for the
//Photos and search component if the paths match. Used a param on the search path so that
//mutiple components did not have to be made, it will simply take this param and use it in the get axios get
//request in the FetchingImages component.

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
<Route  component = {NotFound} />
</Switch>

</div>

</BrowserRouter>
);
 }
  }

export default App;
