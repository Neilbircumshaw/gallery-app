import React from 'react';
import FetchingImages from './FetchingImages';

const Photos = (props, {match}) => {
//extracts the searchTerm from the URL with the props.match.params method.
let searchTerm =  props.match.params.searchTerm;

//if the URL is equal to the home route "/" then makes
//the welcome variable include the text below and have it appear in the div below,
//to welcome the user to the app, if it doesn't equal the "/" route then it just won't appear.


//the div that is returned then includes the FetchingImages component with the
 //prop searchTerm to pass it down into this compoenet for the axios request to use.

let welcome;
if (props.match.url === "/") {
welcome = "Welcome to the app! Click the buttons to see images or search for your own by clicking the search button."
}

return (
<div>
  {welcome}
  <FetchingImages searchTerm = {searchTerm} />
</div>
);
}
export default Photos;
