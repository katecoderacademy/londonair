import React, { useState } from 'react';
import axios, { Axios } from 'axios';


// re-used component that invites the user to expand for more information regarding each measurement
const ClickHere = () => {
	return(
		 <click-prompt><div>Click here for more information</div></click-prompt>
	)
	}
	// BaseURL is the URL for the API
	const baseURL = "https://api.tfl.gov.uk/AirQuality";

export default function App() {
	
	// useStates store whether the div containing information about the measurement are expanded
	const [showedN02Band, setshowedN02Band] = useState(false);  
	const [showedPM10Band, setShowedPM10Band] = useState(false);  
	const [showedpM25Band, setShowedpM25Band] = useState(false);  
	const [showedO3Band, setShowedO3Band] = useState(false);  
	const [showedsO2Band, setShowedsO2Band] = useState(false);  
	const [showedforecastText, setShowedforecastText] = useState(false);  
	
	
	

	// The API is called using Axios. Axios was used instead of fetch as it produces cleaner code (as the JSON does not have to be parsed)
	const [quality, setQuality] = React.useState(null);
	  
	  React.useEffect(() => {
		axios.get(baseURL).then((response) => {
		  setQuality(response.data.currentForecast[0]);
		  console.log(response.data.currentForecast[0])

		});
	  }, []);
	

	  

	//   The API returns data that includes HTML symbols, this process removes them
	let forecastSummaryFixed
		if (!quality) return null;
		console.log(quality.forecastText) 
		if(quality.forecastText != undefined) {
			forecastSummaryFixed = quality.forecastText
			.replace(/&#39;/g, "'")
			.replace(/&gt;/g, '')
			.replace(/&lt;/g, '')
			.replace(/br/g, '')
			.replace(/\//g, ' ');
		  console.log(forecastSummaryFixed)	
		  }

		  if (!quality) return <div>Loading...</div>;
		  
	return (
		// forecast holds the CSS Grid layout, as the major container for this element 
		<div class="forecast">
		   
		   <div id="container">
    
    		</div>  
		  <p id='forecast-headline'><forecast-title>Forecast:</forecast-title> {quality.forecastBand}</p>
		  <img src={(`./${quality.forecastBand}.svg`)} alt={(`${quality.forecastBand}`)}/>
{/* 		  
		  Clickable div - on click the particular state is changed from false to true, changing the display CSS to block over hidden. */}
		  <p onClick={(e) => setShowedforecastText(true)} id='forecast-summary'>Summary: {quality.forecastSummary}.
		  {/* This has a custom div for further details about the forecast given it provides a detailed forecast and not just general information. The others use the ClickHere function */}
		  <p /> <click-prompt>Click for a detailed forecast </click-prompt>
		  </p>

		  <div
				style={showedforecastText ? { display: "block" } : { display: "none" }}
				className="forecast-info">
				<p id='forecast-detail'>{forecastSummaryFixed}</p>
				</div>
		  

		  {/* NO2Band */}
		  <description onClick={(e) => setshowedN02Band(true)} class="n02Band"><forecast-title>Nitrogen Dioxide (n02Band):</forecast-title> {quality.nO2Band}
		  
		  <ClickHere />
		  </description>
		  <img src={(`./${quality.nO2Band}.svg`)} alt={(`${quality.nO2Band}`)}/>
		  		<div
				style={showedN02Band ? { display: "block" } : { display: "none" }}
				className="forecast-info">
				<p>Nitrogen dioxide is a gas. It can also be found in homes where unflued gas-heaters and gas stove tops. Nitrogen dioxide contributes to the formation of ground-level ozone (O3) as well as particulate matter pollution. Nitrogen dioxide can susceptibility to lung infections in people with asthma, worsten asthma triggers such as pollen and exercising, increase the frequent of asthma attacks, and irritate the breathing in healthy people causing them to be more likely to develop infections.</p>
				</div>
		  
				{/* o3Band */}
		  <description onClick={(e) => setShowedO3Band(true)} class="o3Band"><forecast-title>Ozone (o3Band):</forecast-title> {quality.o3Band}<ClickHere /></description>
		  <img src={(`./${quality.o3Band}.svg`)} alt={(`${quality.o3Band}`)}/>
		  <div
				style={showedO3Band ? { display: "block" } : { display: "none" }}
				className="forecast-info">
				<p>Ozone is a gas that can cause coughing and a sore or scratchy throat, making it more difficult to breathe and cause pain when taking a deep breathe through inflaming and damaging the airways. Through this, it can make the lungs more susceptible to infection and aggravate lung diseases such as asthma, emphysema, and chronic bronchitis as well as increase the frequency of asthma attacks.</p>
				</div>
		  {/* pM10Band */}
		  <description onClick={(e) => setShowedPM10Band(true)}  class="pM10Band"><forecast-title>Particulate matter with a diameter of 10 micrometres or less (pM10Band):</forecast-title> {quality.pM10Band}
		  <ClickHere />
		  
		  </description>
		  <img src={(`./${quality.pM10Band}.svg`)} alt={(`${quality.pM10Band}`)}/>
		  <div
				style={showedPM10Band ? { display: "block" } : { display: "none" }}
				className="forecast-info">
				<p>Particulate matter with a diameter of 10 micrometres or less are microscopic solids or liquids that make breathing more difficult by entering the lungs and/or bloodstream. Particulate matter has been linked to death in people with heart or lung disease, nonfatal heart attacks, irregular heartbeat, aggravated asthma, decreased lung function, increased respiratory symptoms, such as irritation of the airways, coughing or difficulty breathing. The reactions of chemicals including sulfur dioxide and nitrogen oxides with other substances (but may be made up of hundreds of substances) create particulate matter. </p>
				</div>

		  {/* pM25Band */}
		  <description onClick={(e) => setShowedpM25Band(true)} class="pM25Band"><forecast-title>Particulate matter with a diameter of 2.5 micrometres or less (pM25Band):</forecast-title> {quality.pM25Band}<ClickHere /></description>
		  <img src={(`./${quality.pM25Band}.svg`)} alt={(`${quality.pM25Band}`)}/>
		  <div
				style={showedpM25Band ? { display: "block" } : { display: "none" }}
				className="forecast-info">
				<p>Particulate matter with a diameter of 2.5 micrometres or less (and includes particles with a diameter of 10 micrometres or less) are microscopic solids or liquids that make breathing more difficult by enter the lungs and/or bloodstream. Particulate matter has been linked to death in people with heart or lung disease, nonfatal heart attacks, irregular heartbeat, aggravated asthma, decreased lung function, increased respiratory symptoms, such as irritation of the airways, coughing or difficulty breathing. The reactions of chemicals including sulfur dioxide and nitrogen oxides with other substances (but may be made up of hundreds of substances) create particulate matter. </p>
				</div>

		  {/* pM25Band */}
		  <description onClick={(e) => setShowedsO2Band(true)} class="pM25Band"><forecast-title>Sulphur Dioxide (sO2Band):</forecast-title> {quality.sO2Band}<ClickHere /></description>
		  <img src={(`./${quality.sO2Band}.svg`)} alt={(`${quality.sO2Band}`)}/>
		  <div
				style={showedsO2Band ? { display: "block" } : { display: "none" }}
				className="forecast-info">
				<p>Sulphur Dioxide a gas. It can cause the narrowing of the airways leading to wheezing, chest tightness and shortness of breath, more frequent asthma attacks in people with asthma and make cardiovascular diseases (diseases of the heart) worse. When Sulphur Oxide is in high concentrations, it can react with other compounds and worsen particulate matter pollution.</p>
				</div>
		
		</div>
	  )
	  ;
	
	  
	}























