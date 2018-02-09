import React from "react";

const  AnimalComponent = props => {


let animal = props.animal;
animal("dog");



return(

  <li>
    <img src={props.url} alt=""/>
  </li>
)

};

export default AnimalComponent
