import React from 'react';



const NotFound = (props) => {

    return (
    <div>
     <h1>404 Error</h1>
     <img src={require("./404.jpg")} alt ="Your page could not be found dude!" />
    </div>
    );
  }
export default NotFound;
