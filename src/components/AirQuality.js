import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import ReactDOM from 'react-dom'
// import Forecast from './Forecast'


	const baseURL = "https://api.tfl.gov.uk/AirQuality";

	export default function App() {
	  const [quality, setQuality] = React.useState(null);

  
	  
	  React.useEffect(() => {
		axios.get(baseURL).then((response) => {
		  setQuality(response.data.currentForecast[0]);
		  console.log(response.data.currentForecast[0])
		//   forecastSummaryFixed5 = forecastSummaryFixed4
	
		});
	  }, []);
	



// 	  var str = "I have a cat, a dog, and a goat.";
// var mapObj = {
//    cat:"dog",
//    dog:"goat",
//    goat:"cat"
// };
// str = str.replace(/cat|dog|goat/gi, function(matched){
//   return mapObj[matched];
// });

	  if (!quality) return null;
	  console.log(quality.forecastText) 
	  if(quality.forecastText != undefined) {
		var forecastSummaryFixed = quality.forecastText.replace(/&#39;/g, "'");
		var forecastSummaryFixed2 = forecastSummaryFixed.replace(/&gt;/g, '');
		var forecastSummaryFixed3 = forecastSummaryFixed2.replace(/&lt;/g, '');
		var forecastSummaryFixed4 = forecastSummaryFixed3.replace(/br/g, '');
		var forecastSummaryFixed5 = forecastSummaryFixed4.replace(/\//g, ' ');
		console.log(forecastSummaryFixed5)	
	}
	  


	const FurtherInformation = () => {
		const [showInfo, setshowInfo] = React.useState(false)
		const onClick = () => setshowInfo(true)
		return (
		  <div onClick={onClick}>
			{ showInfo ? <Information /> : null }
		  </div>
		)
	  }
	  
	  const Information = () => (
		<div id="results" className="more-information">
		  Some Results
		</div>
	  )
	  
	//   ReactDOM.render(<FurtherInformation />, document.querySelector("#container"))

	return (
		<div class="forecast">
		   
		  
		  <p id='forecast-headline'>Forecast: {quality.forecastBand}</p>
		  <img src={(`./${quality.forecastBand}.svg`)} alt={(`${quality.forecastBand}`)}/>
		  
		  <p id='forecast-summary'>Summary: {quality.forecastSummary}</p>
		  <p id='forecast-detail'>Detailed: {forecastSummaryFixed5}</p>

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























