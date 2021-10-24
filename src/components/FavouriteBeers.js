import React from "react";

const FavouriteBeers = ({ favouriteBeers}) => {

    const beerItems = favouriteBeers.map((beer, index) => {

        return <li key={index}> {beer.name}</li>
        
});

return(
    <ul>
        {beerItems}
    </ul>
)
}

export default FavouriteBeers;