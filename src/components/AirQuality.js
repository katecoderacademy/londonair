import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import ReactDOM from 'react-dom'
// import Forecast from './Forecast'


	const baseURL = "https://api.tfl.gov.uk/AirQuality";

export default function App() {
	const [showedN02Band, setshowedN02Band] = useState(false);  
	const [showedPM10Band, setShowedPM10Band] = useState(false);  
	const [showedpM25Band, setShowedpM25Band] = useState(false);  
	const [showedO3Band, setShowedO3Band] = useState(false);  
	const [showedsO2Band, setShowedsO2Band] = useState(false);  
	const [showedforecastText, setShowedforecastText] = useState(false);  
	
	
	const [quality, setQuality] = React.useState(null);

  
	  
	  React.useEffect(() => {
		axios.get(baseURL).then((response) => {
		  setQuality(response.data.currentForecast[0]);
		  console.log(response.data.currentForecast[0])

		});
	  }, []);
	
	  
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


	return (
		<div class="forecast">
		   
		   <div id="container">
    
    		</div>  
		  <p id='forecast-headline'>Forecast: {quality.forecastBand}</p>
		  <img src={(`./${quality.forecastBand}.svg`)} alt={(`${quality.forecastBand}`)}/>
		  
		  <p onClick={(e) => setShowedforecastText(true)} id='forecast-summary'>Summary: {quality.forecastSummary}.
		  <p /> Click for a detailed forecast
		  </p>

		  <div
				style={showedforecastText ? { display: "block" } : { display: "none" }}
				className="d-flex justify-content-between align-center pl-2 pr-2 forecast-info"
				>
				<p id='forecast-detail'>Detailed: {forecastSummaryFixed}</p>
				</div>
		  

		  {/* NO2Band */}
		  <description onClick={(e) => setshowedN02Band(true)} class="n02Band">Nitrogen Dioxide (n02Band): {quality.nO2Band}
		  
		  
		  </description>
		  <img src={(`./${quality.nO2Band}.svg`)} alt={(`${quality.nO2Band}`)}/>
		  		<div
				style={showedN02Band ? { display: "block" } : { display: "none" }}
				className="d-flex justify-content-between align-center pl-2 pr-2 forecast-info"
				>
				<p>Nitrogen dioxide is a gas. It can also be found in homes where unflued gas-heaters and gas stove tops. Nitrogen dioxide contributes to the formation of ground-level ozone (O3) as well as particulate matter pollution. Nitrogen dioxide can susceptibility to lung infections in people with asthma, worsten asthma triggers such as pollen and exercising, increase the frequent of asthma attacks, and irritate the breathing in healthy people causing them to be more likely to develop infections.</p>
				</div>
		  
				{/* o3Band */}
		  <description onClick={(e) => setShowedO3Band(true)} class="o3Band">Ozone (o3Band): {quality.o3Band}</description>
		  <img src={(`./${quality.o3Band}.svg`)} alt={(`${quality.o3Band}`)}/>
		  <div
				style={showedO3Band ? { display: "block" } : { display: "none" }}
				className="d-flex justify-content-between align-center pl-2 pr-2 forecast-info"
				>
				<p>Ozone is a gas that can cause coughing and sore or scratchy throat, make it more difficult to breathe and cause pain when taking a deep breathe through inflaming and damaging the airways. Through this, it can make the lungs more susceptible to infection and aggravate lung diseases such as asthma, emphysema, and chronic bronchitis as well as increase the frequency of asthma attacks.</p>
				</div>
		  {/* pM10Band */}
		  <description onClick={(e) => setShowedPM10Band(true)}  class="pM10Band">Particulate matter with a diameter of 10 micrometres or less (pM10Band): {quality.pM10Band}</description>
		  <img src={(`./${quality.pM10Band}.svg`)} alt={(`${quality.pM10Band}`)}/>
		  <div
				style={showedPM10Band ? { display: "block" } : { display: "none" }}
				className="d-flex justify-content-between align-center pl-2 pr-2 forecast-info"
				>
				<p>Particulate matter with a diameter of 10 micrometres or less are microscopic solids or liquids that make breathing more difficult by enter the lungs and/or bloodstream. Particulate matter has been linked to death in people with heart or lung disease, nonfatal heart attacks, irregular heartbeat, aggravated asthma, decreased lung function, increased respiratory symptoms, such as irritation of the airways, coughing or difficulty breathing. The reactions of chemicals including sulfur dioxide and nitrogen oxides with other substances (but may be made up of hundreds of substances) create particulate matter. </p>
				</div>

		  {/* pM25Band */}
		  <description onClick={(e) => setShowedpM25Band(true)} class="pM25Band">Particulate matter with a diameter of 2.5 micrometres or less (pM25Band): {quality.pM25Band}</description>
		  <img src={(`./${quality.pM25Band}.svg`)} alt={(`${quality.pM25Band}`)}/>
		  <div
				style={showedpM25Band ? { display: "block" } : { display: "none" }}
				className="d-flex justify-content-between align-center pl-2 pr-2 forecast-info"
				>
				<p>Particulate matter with a diameter of 2.5 micrometres or less (and includes particles with a diameter of 10 micrometres or less) are microscopic solids or liquids that make breathing more difficult by enter the lungs and/or bloodstream. Particulate matter has been linked to death in people with heart or lung disease, nonfatal heart attacks, irregular heartbeat, aggravated asthma, decreased lung function, increased respiratory symptoms, such as irritation of the airways, coughing or difficulty breathing. The reactions of chemicals including sulfur dioxide and nitrogen oxides with other substances (but may be made up of hundreds of substances) create particulate matter. </p>
				</div>

		  {/* pM25Band */}
		  <description onClick={(e) => setShowedsO2Band(true)} class="pM25Band">sO2Band: {quality.sO2Band}</description>
		  <img src={(`./${quality.sO2Band}.svg`)} alt={(`${quality.sO2Band}`)}/>
		  <div
				style={showedsO2Band ? { display: "block" } : { display: "none" }}
				className="d-flex justify-content-between align-center pl-2 pr-2 forecast-info"
				>
				<p>Sulphur Dioxide a gas. It can cause the narrowing of the airways leading to wheezing, chest tightness and shortness of breath, more frequent asthma attacks in people with asthma and make cardiovascular diseases (diseases of the heart) worse. When Sulphur Oxide is in high concentrations, it can react with other compounds and worsen particulate matter pollution.</p>
				</div>
		
		</div>
	  );
	
	  
	}























