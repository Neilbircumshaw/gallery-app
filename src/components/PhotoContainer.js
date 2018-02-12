import React from 'react';
import Pictures from "./Pictures";
import NoPicture from "./NoPicture";


const  PhotoContainer = props => {

let results = props.results;


let ListOfPictures;

if(results.length > 0){ListOfPictures = results.map(Picture =>
  <Pictures url={`http://farm${Picture.farm}.staticflickr.com/${Picture.server}/${Picture.id}_${Picture.secret}.jpg`} key={Picture.id} animal={this.fetchImages} />)
} else {ListOfPictures = <NoPicture />}



 return(

<div className = "photo-container">
 <ul>
  {ListOfPictures}
 </ul>
</div>

)};

export default PhotoContainer
