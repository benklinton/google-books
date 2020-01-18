import React from "react"


function Header (props) {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="navbar-brand mb-0 h1">Google Books</div>
       <a class="navbar-brand" id="search" href="/">Search</a>
        <a class="navbar-brand" id="saved" href="/">Saved</a>
      </nav>
    )
}

export default Header;