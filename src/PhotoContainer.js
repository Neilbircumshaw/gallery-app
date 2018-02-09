import React, { Component } from 'react';
import {Route} from "react-router-dom";
import AnimalComponent from "./AnimalComponent";
import apiKey from "./config.js";
import axios from "axios";






class PhotoContainer extends Component {

  constructor() {
   super();
   this.state =
    { images: [],
      animal: []
    }};


     animal = (animaltype) =>  {
     this.setState({animal: animaltype});
    }


componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=
     ${this.state.animal}&per_page=15&format=json&nojsoncallback=1`)
     .then(response => {
     this.setState({
      images: response.data.photos.photo
      });
    })
    .catch(error => {
      console.log("Error fetching and parsing data", error);
    })};




   render(){

const results = this.state.images;




let AnimalPictures = results.map(Picture =>
  <AnimalComponent url={`http://farm${Picture.farm}.staticflickr.com/${Picture.server}/${Picture.id}_${Picture.secret}.jpg`} key={Picture.id} animal={this.animal} />)




 return(





<div className = "photo-container">


  <ul>

   <Route  path="/cats" render={() => AnimalPictures } />
   <Route  path= "/dogs" render={() => AnimalPictures} />
   <Route  path= "/sloths" render={() => AnimalPictures} />


   </ul>

</div>




)}};

export default PhotoContainer
