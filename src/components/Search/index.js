import React from 'react';
import './style.css'
function Search () {
    return (
    <div class="jumbotron jumbotron-fluid" id = "search">
  <div class="container">
    <h5 class="display-6"> Book Search</h5>
    <input type="text" class="form-control"></input>
    <button type="submit" class="btn btn-dark" id="button">Search</button>
  </div>
</div>
    )
}

export default Search;