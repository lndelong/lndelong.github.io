import React from "react";
import { useNavigate } from "react-router-dom";
import FavoritesButton from './FavoritesButton'

export default function Park({ park, selectedPark, setSelectedPark, favorites, setFavorites }) {

    const navigate = useNavigate(); // Get the navigation function

    const handleParkClick = (id) => {
        setSelectedPark(id);
        navigate(`/parks/attractions`);
    }

    console.log(favorites)

    return(
        <div className="card parkCard p-0 m-0" >
            <div className='row p-0 m-0'>
                <div className="col">
                    <h6 key={park.name}>{park.name}</h6>
                </div>
                <div className="col pe-0 me-0">
                    <FavoritesButton park={park} favorites={favorites} setFavorites={setFavorites}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button onClick={() => handleParkClick(park.id)}>Display Attractions</button>
                </div>
            </div>
        </div>
    )
}