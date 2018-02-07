import React from "react";

const SlothComponent = props => {
  const sloth = props.animal;
  sloth("sloth");

 return(
   <div>
  <h1>Sloths baby!</h1>
  <li>
    <img src={props.url} alt="" key="1" />
  </li>
  </div>
)
};

export default SlothComponent
