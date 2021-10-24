import React from "react";
import BeersContainer from "../containers/BeersContainer";


const BeersDetails = ({selectedBeer,  addBeer}) => {


    const handleClick = () => {
    addBeer();
    }


    return (
        <div>
            <h3> {selectedBeer.name} </h3>
            
            <p> {selectedBeer.tagline} </p>
            <p> {selectedBeer.description} </p>
            <p> {selectedBeer.abc}  </p>
            <button onClick={handleClick}> Add To Favourites </button>
        </div>

    )
}

export default BeersDetails;