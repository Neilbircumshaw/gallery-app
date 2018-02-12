import React from 'react';



const NotFound = (props) => {

    return (
    <div>
     <h1>404 Error</h1>
     <img src={require("../images/404.jpg")} alt ="Your page could not be found dude!" style={{ borderRadius: '50%'}} />
    </div>
    );
  }
export default NotFound;
