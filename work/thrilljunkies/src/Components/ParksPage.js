import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Park from './Park';
import Favorites from './Favorites';

export default function ParksPage({
  selectedDestination, 
  setSelectedDestination, 
  destinations, 
  setDestinations, 
  selectedPark, 
  setSelectedPark, 
  attractions, 
  setAttractions, 
  favorites,
  setFavorites,
  SideBar
}) {
  
    const otherParks = destinations.filter((destination) =>
    !['disney', 'legoland', 'universal', 'six flags'].includes(destination.name.toLowerCase())
    );
      
    const parkSelections = [
      {keyword: 'disney', selected: '1'},
      {keyword: 'legoland', selected: '2'},
      {keyword: 'universal', selected: '3'},
      {keyword: 'six flags', selected: '4'},
      {keyword: otherParks, selected: '5'},
    ]

    const keyword = parkSelections.find((selection) => selection.selected === selectedDestination)?.keyword;
  
    const filteredDestinations = filterDestinationsByKeyword(destinations, keyword);
    function filterDestinationsByKeyword(destinations, keyword) {
      return destinations.filter((destination) =>
        destination.name.toLowerCase().includes(keyword)
      );
    }

    console.log(selectedPark)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://api.themeparks.wiki/v1/entity/${selectedPark}/children/`);
            if (response.ok) {
                const data = await response.json();
                const filteredAttractions = data.children.filter(
                  (children) => children.entityType === 'ATTRACTION'
                );
                setAttractions(filteredAttractions);
              } else {
                throw new Error('Failed to fetch data');
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData();
        }, [selectedPark, setAttractions]);

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
      setIsToggled(!isToggled);
    };

    return (      
        <div className='container-fluid sidebarCard p-0 m-0 h-100'>
        <div className='row sidebarCard h-100 m-0 p-0'>
          <div className='col-sm-5 col-md-4 col-lg-3 sidebarCard p-0'>
            <SideBar />
          </div>
          <div className="col p-2">
            <div className="container parkContainer border pt-5">
                {filteredDestinations.map((destination) =>
                destination.parks.map((park) => (
                  <Park 
                    key={park.name}
                    park={park}
                    selectedPark={selectedPark} 
                    setSelectedPark={setSelectedPark}
                    favorites={favorites}
                    setFavorites={setFavorites}
                  />
                ))
              )}
            </div>
          </div>
          <div className='col'>
            <button className='border' onClick={handleToggle}>
            Favorites             
            </button>
            {isToggled ? <Favorites favorites={favorites} /> : null}
          </div>
        </div>
      </div>
    );
}
  
  