import React from "react";
import {Route} from "react-router-dom";
import DogComponent from "./DogComponent";
import CatComponent from "./CatComponent";
import SlothComponent from "./SlothComponent";






const PhotoContainer = props => {
const results = props.data;
let animalType = props.AnimalFunc;




  let DogPictures = results.map(Picture =>
  <DogComponent url={`http://farm${Picture.farm}.staticflickr.com/${Picture.server}/${Picture.id}_${Picture.secret}.jpg`} key={Picture.id} animal={animalType} />)

  let CatPictures = results.map(Picture =>
  <CatComponent url={`http://farm${Picture.farm}.staticflickr.com/${Picture.server}/${Picture.id}_${Picture.secret}.jpg`} key={Picture.id} animal={animalType} />)

  let SlothPictures = results.map(Picture =>
  <SlothComponent url={`http://farm${Picture.farm}.staticflickr.com/${Picture.server}/${Picture.id}_${Picture.secret}.jpg`} key={Picture.id}animal={animalType}/>)





 return(

<div className = "photo-container">
  <ul>

   <Route  path="/cats" render={() => CatPictures} />
   <Route  path= "/dogs" render={() => DogPictures} />
   <Route  path= "/sloths" render={() => SlothPictures} />


   </ul>

</div>
)};

export default PhotoContainer
