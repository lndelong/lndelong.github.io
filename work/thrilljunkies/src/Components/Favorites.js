import React from "react";

export default function Favorites ({ favorites }) {

    return(
        <div className="border h-50">
            {favorites.map((park) => (
              <p key={park.name}>{park.name}</p>
            ))}
        </div>
    )
}