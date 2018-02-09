import React from 'react';
import NavMenu from "./NavMenu";
import PhotoContainer from "./PhotoContainer"
import { BrowserRouter} from "react-router-dom";
import "./App.css";




const App = props => {

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
return (
<BrowserRouter>
<div className="container">
 <NavMenu  />
 <PhotoContainer />
</div>
</BrowserRouter>


       );

};

export default App;
