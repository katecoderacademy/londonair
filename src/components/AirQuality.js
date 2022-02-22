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
		<div class="forecast">
		   
		  
		  <p>Forecast: {quality.forecastBand}</p>
		  
		  {/* Need to urgently add processing in here 
		    summary = summary.replace(/&lt;/g, '<');  
            summary = summary.replace(/&gt;/g, '>');
			*/}
		  <p>Summary: {quality.forecastSummary}</p>
		  <p>Forecast: {quality.forecastText}</p>
		  
		  <description>n02Band: {quality.nO2Band}</description>
		  <img src={(`./${quality.nO2Band}.png`)} alt={(`${quality.nO2Band}`)}/>
		  <description>o3Band: {quality.o3Band}</description>
		  <img src={(`./${quality.o3Band}.png`)} alt={(`${quality.o3Band}`)}/>
		  <description>pM10Band: {quality.pM10Band}</description>
		  <img src={(`./${quality.pM10Band}.png`)} alt={(`${quality.pM10Band}`)}/>
		  <description>pM25Band: {quality.pM25Band}</description>
		  <img src={(`./${quality.pM25Band}.png`)} alt={(`${quality.pM25Band}`)}/>
		  <description>sO2Band: {quality.sO2Band}</description>
		  <img src={(`./${quality.sO2Band}.png`)} alt={(`${quality.sO2Band}`)}/>
		</div>
	  );
	}























