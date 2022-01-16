import React from "react";
import './Searchbar.css'

class Searchbar extends React.Component{
    constructor(props) {
        super()
    }


    render() {
        return(
            <div id='searchbar'>
                 <input type="text" name='search' id='searchInput'/>
            </div>
        )
    }
}

export default Searchbar