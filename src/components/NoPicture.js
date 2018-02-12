import React from 'react';

const NoPicture = (props) => {



    return (
      <div className = "photo-container not-found">
        <h1>Oh no!</h1>
        <img src={require("../images/noresults.png")} alt ="Could not find what you were looking for, try something else?" style={{ height: '100px', width: "100px"}} />
        <h3>Sorry, no images found!</h3>

          </div>

    );
  }
export default NoPicture;
