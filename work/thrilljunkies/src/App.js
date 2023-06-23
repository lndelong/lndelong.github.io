import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import HomePage from './Components/HomePage';
import ParksPage from './Components/ParksPage';
import AttractionsPage from './Components/AttractionsPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/react-bootstrap/';
// import AttractionsList from './Components/AttractionsList';

export default function App() {

  const [destinations, setDestinations] = useState([]);  
  const [radioValue, setRadioValue] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedPark, setSelectedPark] = useState(null);
  const [attractions, setAttractions] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleRadioChange = (selected) => {
    setSelectedDestination(selected);
  }

console.log(radioValue)
console.log(selectedDestination)
console.log(selectedPark)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.themeparks.wiki/v1/destinations');
        if (response.ok) {
          const data = await response.json();
          setDestinations(data.destinations);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [radioValue]);

  return (
    <div className="App vh-100">  
      <Router>   
        <NavBar />
        <Routes>  
          <Route path="/" element={<Navigate to="/Home"/>} /> 
          <Route path="/Home" 
            element={
            <HomePage
              destinations={destinations} 
              SideBar={() => 
                <SideBar 
                  radioValue={radioValue} 
                  setRadioValue={setRadioValue} 
                  handleRadioChange={handleRadioChange}/>} />}/>
          <Route path="/Parks" 
            element={
            <ParksPage
            selectedDestination={selectedDestination} 
            setSelectedDestination={setSelectedDestination} 
            destinations={destinations} 
            setDestinations={setDestinations} 
            selectedPark={selectedPark} 
            setSelectedPark={setSelectedPark}
            attractions={attractions}
            setAttractions={setAttractions}
            favorites={favorites}
            setFavorites={setFavorites}
            SideBar={() => 
              <SideBar 
                radioValue={radioValue} 
                setRadioValue={setRadioValue} 
                handleRadioChange={handleRadioChange}/>} />} />
          <Route path="/Parks/Attractions" 
          element={
            <AttractionsPage 
              selectedPark={selectedPark} 
              setSelectedPark={setSelectedPark} 
              attractions={attractions} 
              setAttractions={setAttractions} 
                SideBar={() => 
                  <SideBar 
                    radioValue={radioValue} 
                    setRadioValue={setRadioValue} 
                    handleRadioChange={handleRadioChange}/>} 
                    />} />           
        </Routes>
      </Router>    
    </div>   
  );
};