import React from "react";

const DogComponent = props => {
const dog = props.animal;
dog("dog");


 return(


  <li>
    <img src={props.url} alt=""/>
  </li>

)
};

export default DogComponent
