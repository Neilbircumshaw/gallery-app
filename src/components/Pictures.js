import React from "react";

//this uses the results from the parent component to be placed into the src attribute which will redner the images.

const  Pictures = props => {

return(

  <li>
    <img src={props.url} alt=""/>
  </li>
)
};

export default Pictures
