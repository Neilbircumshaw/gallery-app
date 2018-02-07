import React from "react";

const CatComponent = props => {
  const cat = props.animal;
  cat("cat");


return(

  <li>
    <img src={props.url} alt=""/>
  </li>
)

};

export default CatComponent
