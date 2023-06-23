import React from 'react';

export default function AttractionsList( selectedPark, attractions ) {
  
     
  
    return (
      <div>
        <h2>Attractions for {selectedPark}</h2>
        <ul>
          {attractions.map((attraction) => (
            <li key={attraction.id}>{attraction.name}</li>
          ))}
        </ul>
      </div>
    );
  };