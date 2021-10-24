import React, {useState , useEffect} from "react";
import BeerList from "../components/BeerList";
import BeersDetails from "../components/BeerDetails";
import FavouriteBeers from "../components/FavouriteBeers";



const BeersContainer = () => {

    const [beers, setBeers] = useState ([])
    const [selectedBeer, setSelectedBeer] = useState(null);
    const [favouriteBeers, setFavouriteBeers] = useState([]);


    
    useEffect(() => {
        getBeers();
    }, [])



    const getBeers = function(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beers => setBeers(beers))

    }

    const onBeerSelected =  function(event) {
       
        setSelectedBeer(beers[event.target.value]);
    }

    

    const addBeer =() => {
        const upDateFavs = [...favouriteBeers, selectedBeer];
        setFavouriteBeers(upDateFavs)
    }



return(

    <div>
        <BeerList beers={beers} onBeerSelected={onBeerSelected}/>
        {selectedBeer ? <BeersDetails selectedBeer={selectedBeer} addBeer={addBeer} /> : null}
        <FavouriteBeers  favouriteBeers = {favouriteBeers} />
    </div>
    )

}

export default BeersContainer;