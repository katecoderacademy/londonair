import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'


	const baseURL = "https://api.tfl.gov.uk/AirQuality";

	export default function Forecast() {
	  const [quality, setQuality] = React.useState(null);

  
	  
	  React.useEffect(() => {
		axios.get(baseURL).then((response) => {
		  setQuality(response.data.currentForecast[0].forecastText);
		  console.log(response.data.currentForecast[0].forecastText)

		});
	  }, []);
	

	  if (!quality) return null;
	  if(quality != undefined) {
		// var forecastSummaryFixed = quality.forecastText.replace(&lt;br/&gt;/, '>');
		var forecastSummaryFixed = quality.replace(/&#39;/g, "'");
		var forecastSummaryFixed2 = forecastSummaryFixed.replace(/&gt;/g, '>');
		var forecastSummaryFixed3 = forecastSummaryFixed2.replace(/&lt;/g, '<');
		var forecastSummaryFixed4 = forecastSummaryFixed3.replace(/<&lt;>/g, '<');
		
		console.log(forecastSummaryFixed4)	
	}
	  

	function fixDOM() {
		const element = (
			<p>Forecast: {forecastSummaryFixed4}</p>
		);
		ReactDOM.hydrate(element, document.getElementById('forecastSummary'));

	}
	setInterval(fixDOM, 1);

	return (
		<div id='forecastSummary'></div>
		  );
	}























