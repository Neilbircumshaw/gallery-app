import React, { Component } from 'react';
import apiKey from "../config.js";
import axios from "axios";
import PhotoContainer from "./PhotoContainer";


//the constructor initialises the state of the app.

class FetchingImages extends Component {

  constructor() {
   super();
   this.state =
    { images: [],
      loading: true
    }};

//The getRequest function uses the axios get request to make a call to the flickr api, the results are then updated to the images state.
  //the term "query" in the getRequest function is by default the word "random" - this is so that the images
  //that are returned are under the tag "random", so that when the "/" route is first loaded, it loads random images, instead of being just a blank page.
  //the query can also be equal to the searchTerm in the URL, this is passed to it by both componentDidMount and componenetWillRecieveProps with
  //this.props.searchTerm.(searchTerm was passed down from Photos component as props.) componentWillReceiveProps needs to be called to see
  //whether the prop has been changed, if it has it will re-render the DOM
  //to the correctly updated query param. The request also has within it the loading state, this becomes false as the loading has been done when the images
  //have been returned by the request. This is used in the render methord with a ternary operator that states if the loading state is true,
  //then load the <p> Loading...</p>, if not then load the PhotoContainer component

getRequest (query = "random") {
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=
   ${query}&per_page=18&format=json&nojsoncallback=1`)
   .then(response => {
   this.setState({
    images: response.data.photos.photo,
    loading: false
    });
  })
  .catch(error => {
    console.log("Error fetching and parsing data", error);
  })
}

componentDidMount(Props){
    this.getRequest(this.props.searchTerm);
}


componentWillReceiveProps(nextProps){
    if (this.props.searchTerm !== nextProps.searchTerm ){
        this.getRequest(nextProps.searchTerm)
}
}

render(){
  return(

     (this.state.loading)
     ? <p> Loading...</p>
     : <PhotoContainer results={this.state.images}/>
)}}

export default FetchingImages
