import React from "react";

import axios from 'axios';






export function About() { 
  axios.all([
    axios.get('https://api.tfl.gov.uk/AirQuality/'),
  ])
  
  .then(response => {
    
    console.log('Current Forecast: ', response[0].data.currentForecast[0]);
  });
  
  return (
    <div>

      <heading>About
          <forecastText></forecastText>
      </heading>
      <div>
        
      </div>
    </div>
  );
}
