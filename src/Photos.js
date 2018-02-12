import React from 'react';
import FetchingImages from './FetchingImages';

const Photos = (props, {match}) => {

let searchTerm =  props.match.params.searchTerm;

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
