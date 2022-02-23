import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'
// import Forecast from './Forecast'


	const baseURL = "https://api.tfl.gov.uk/AirQuality";

export default function App() {
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

// 			function Search() {
// 		const [showResults, setShowResults] = React.useState(false);
// 		const onClick = () => setShowResults(true);
// 		return (
// 			<div>
// 				<input type="submit" value="Word" onClick={onClick} />
// 				{showResults ? <Results /> : null}
// 			</div>
// 		);
// 	}
	  
// 			const Results = () => (
// 				<div id="results" className="search-results">
// 				Some Results
// 				</div>
// 			)
		  

// ReactDOM.render(<Search />, document.querySelector("#container"))




	// const [showed, setShowed] = useState(false);

	return (
		<div class="forecast">
		   
		   <div id="container">
    
    		</div>  
		  <p id='forecast-headline'>Forecast: {quality.forecastBand}</p>
		  <img src={(`./${quality.forecastBand}.svg`)} alt={(`${quality.forecastBand}`)}/>
		  
		  <p id='forecast-summary'>Summary: {quality.forecastSummary}</p>
		  <p id='forecast-detail'>Detailed: {forecastSummaryFixed}</p>

		  <description class="n02Band">n02Band: {quality.nO2Band}</description>
		  <img src={(`./${quality.nO2Band}.svg`)} alt={(`${quality.nO2Band}`)}/>
		  <description class="o3Band">o3Band: {quality.o3Band}</description>
		  <img src={(`./${quality.o3Band}.svg`)} alt={(`${quality.o3Band}`)}/>
		  <description class="pM10Band">pM10Band: {quality.pM10Band}</description>
		  <img src={(`./${quality.pM10Band}.svg`)} alt={(`${quality.pM10Band}`)}/>
		  <description class="pM25Band">pM25Band: {quality.pM25Band}</description>
		  <img src={(`./${quality.pM25Band}.svg`)} alt={(`${quality.pM25Band}`)}/>
		  <description class="pM25Band">sO2Band: {quality.sO2Band}</description>
		  <img src={(`./${quality.sO2Band}.svg`)} alt={(`${quality.sO2Band}`)}/>
		</div>
	  );
	
	  
	}























