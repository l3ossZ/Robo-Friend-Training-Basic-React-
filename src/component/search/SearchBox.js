import React from "react";
import "./SearchBox.css";

const SearchBox = ({searchfield,searchChange}) =>{
    return(
        <div className="center">
            <input  type="search" placeholder="Search Robots" onChange={searchChange}/>
        </div>
    );
    
}

export default SearchBox;