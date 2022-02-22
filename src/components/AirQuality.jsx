import React, { useState, useEffect } from 'react';
import axios from 'axios';

	const baseURL = "https://api.tfl.gov.uk/AirQuality";

	export default function App() {
	  const [quality, setQuality] = React.useState(null);
	
	
	
	
	  React.useEffect(() => {
		axios.get(baseURL).then((response) => {
		  setQuality(response.data.currentForecast[0]);
		  console.log(response.data.currentForecast[0])
		});
	  }, []);
	
	  if (!quality) return null;
	
	  return (
		<div>
		  
		  <h1>Heading</h1>
		  <p>forecastBand: {quality.forecastBand}</p>
		  <p>forecastSummary: {quality.forecastSummary}</p>
		  <p>forecastText: {quality.forecastSummary}</p>
		  <p>o3Band: {quality.o3Band}</p>
		  <p>n02Band: {quality.nO2Band}</p>
		  <p>o3Band: {quality.o3Band}</p>
		  <p>pM10Band: {quality.pM10Band}</p>
		  <p>pM25Band: {quality.pM10Band}</p>
		  <p>sO2Band: {quality.pM10Band}</p>
		</div>
	  );
	}























