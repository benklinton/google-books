import React from "react"
import "./style.css"

function Header () {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
            <div class="navbar-brand mb-0 h1">Google Books</div>
       <a class="navbar-brand" id="search" href="/">Search</a>
        <a class="navbar-brand" id="saved" href="/">Saved</a>
      </nav>
    )
}

export default Header;