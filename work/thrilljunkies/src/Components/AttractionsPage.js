import React, { useEffect, useState } from 'react';

export default function AttractionsPage({ selectedPark, setSelectedPark, attractions, setAttractions, SideBar }) {

  const [parkName, setParkName] = useState('');

  useEffect(() => {
    const fetchParkDetails = async () => {
      try {
        const response = await fetch(`https://api.themeparks.wiki/v1/entity/${selectedPark}`);
        if (response.ok) {
          const data = await response.json();
          setParkName(data.name);
        } else {
          throw new Error('Failed to fetch park details');
        }
      } catch (error) {
        console.error('Error fetching park details:', error);
      }
    };

    fetchParkDetails();
  }, [selectedPark]);

  return (
    <div className='container-fluid sidebarCard p-0 m-0 h-100'>
        <div className='row sidebarCard h-100 m-0 p-0'>
          <div className='col-sm-5 col-md-4 col-lg-3 sidebarCard p-0'>
            <SideBar/>
          </div>
          <div className="col p-2">
            <div className="container border pt-5">           
              <ul>
                 <h4>All attractions at {parkName}:</h4>
                {attractions.map((attraction) => (
                  <li key={attraction.id} >
                    {attraction.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
};

