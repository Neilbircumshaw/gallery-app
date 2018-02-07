import React, { Component } from 'react';
import NavMenu from "./NavMenu";
import PhotoContainer from "./PhotoContainer"
import "./App.css";
import { BrowserRouter} from "react-router-dom";
import apiKey from "./config.js";
import axios from "axios";



class App extends Component {




constructor() {
 super();
 this.state =
  { images: [],
    animal: []}
  }

  animalType = (animal) => {
  this.setState({animal : animal});
}



  componentWillMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=
   ${this.state.animal}&per_page=15&format=json&nojsoncallback=1`)
   .then(response => {
   this.setState({
    images: response.data.photos.photo
    });
  })
  .catch(error => {
    console.log("Error fetching and parsing data", error);





  });
 }



   /*performSearch = (query) => {
     axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=15&format=json&nojsoncallback=1`)
    .then(response => {
    this.setState({
     images: response.data.photos.photo
   });
   })
   .catch(error => {
     console.log("Error fetching and parsing data", error);
   });
 }

*/


render() {

    return (
<BrowserRouter>
  <div className="container">

    <NavMenu  />

    <PhotoContainer data = {this.state.images} AnimalFunc = {this.animalType} />
    </div>

</BrowserRouter>
    );
  }
}

export default App;
