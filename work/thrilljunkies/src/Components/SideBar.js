import React from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useNavigate } from 'react-router-dom';

export default function SideBar({ radioValue, setRadioValue, handleRadioChange }) {
  
  const radios = [
    { name: 'Disney Parks', value: '1' },
    { name: 'LegoLand Parks', value: '2' },
    { name: 'Universal Studios', value: '3' },
    { name: 'Six Flags Parks', value: '4' },
    { name: 'Something Else', value: '5' }
  ];

  const navigate = useNavigate(); // Get the navigation function

  React.useEffect(() => {
    // Update the selected value based on the radioValue prop
    handleRadioChange(radioValue);
  }, [radioValue, handleRadioChange]);

  return(
    <div className='sidebarCard border-light text-bg-light card p-0 h-100'>
      <div className='card-title'>
        <h5 className="pt-5 px-4">What are you in the mood for?</h5>   
          <div className="card-body ">            
            {radios.map((radio, idx) => (  
              <div key={radio.value}>    
                <ToggleButton
                  className="m-2 destinationButton text-center"
                  key={idx}
                  id={`radio-${idx}`}
                  type="checkbox"
                  name="radio"
                  variant="outline-primary"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => {                    
                  setRadioValue(e.currentTarget.value);
                  handleRadioChange(radio.value)
                  navigate(`/parks/`); 
                  // ${radio}
                  }} // Pass the selected radio name}
                >
                  {radio.name}
                </ToggleButton> 
              </div> 
            ))}             
       </div>                
      </div>
    </div>
  );

};
