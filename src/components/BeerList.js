import React from "react";
import BeersContainer from "../containers/BeersContainer";


const BeerList = ({beers, onBeerSelected}) => {


    const beersItem = beers.map((beer, index) => {
    
        return (<li beer={beer} value = {index} onClick={onBeerSelected} key={index}> {beer.name} </li>
        )
     })

     return(
     <div>
         <ul>
            {beersItem}
         </ul>
     </div>
     )
}
export default BeerList;