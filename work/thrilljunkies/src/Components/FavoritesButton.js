import React, {useState} from "react";

export default function FavoritesButton({ park, favorites, setFavorites }) {

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
        if (isToggled) {
            handleRemoveFavorite(park);
        }
    };

    const handleAddFavorite = (park) => {
    if (!favorites.some((favorite) => favorite.id === park.id)) {
    setFavorites([...favorites, park]);
        }
    };
    
    const handleRemoveFavorite = (park) => {
    const updatedFavorites = favorites.filter(
        (favorite) => favorite !== park
    );
    setFavorites(updatedFavorites);
    };
    
    return(
        <button onClick={() => {
            handleToggle();
            handleAddFavorite(park);
            }}>
            {!isToggled ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
            </svg>
             ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
                <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
            </svg>
    )}
        </button>
    )

}

