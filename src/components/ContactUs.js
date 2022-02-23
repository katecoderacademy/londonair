import React, { useState } from "react";
import axios from "axios";
import ReactDOM from 'react-dom'



export function ContactUs() { 





  // axios.all([
  //   axios.get('https://api.tfl.gov.uk/AirQuality/'),
  // ])
  
  // .then(response => {
    
  //   console.log('Current Forecast: ', response[0].data.currentForecast[0]);
  //   console.log('Current Forecast: ', response);
  // });


  const Search = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return (
          <div>
        <input type="submit" value="Word" onClick={onClick} />
        { showResults ? <Results /> : null }
      </div>
    )
  }
  
  const Results = () => (
    <div id="results" className="search-results">
      Some Results
    </div>
  )

  




  
 
ReactDOM.render(<Search />, document.querySelector("#container"))


  return (
    <div>

      <heading>About
          {/* <forecastText></forecastText> */}
      </heading>
      
      <div id="container">
    
    </div>  

      
    </div>
  
  );

  
  

}
