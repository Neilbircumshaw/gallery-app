import React, { Component } from 'react';
import apiKey from "../config.js";
import axios from "axios";
import PhotoContainer from "./PhotoContainer";


class FetchingImages extends Component {

  constructor() {
   super();
   this.state =
    { images: [],
      loading: true
    }};


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
