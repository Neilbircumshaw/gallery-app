import React from 'react';
import Pictures from "./Pictures";
import NoPicture from "./NoPicture";

//This component takes the results of the axios get request and maps it out,
   //using the data from the request by interpulating the data into a string that is passed to the pictures component as a prop,
    //this prop is then used in the Pictures component to render the image, using it as the src attribute */}

    //A conditional statement is also written here which sees whether the returned results' length is 0 and if it is
    //it will use the Picture component in the return statement as the variable "ListOfPictures." If it is not, it will return the NoPicture component as the variable
    //ListOfPictures instead.
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
