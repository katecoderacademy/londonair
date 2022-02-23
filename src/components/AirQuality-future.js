import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'
import Forecast from './Forecast'


	const baseURL = "https://api.tfl.gov.uk/AirQuality";

	export default function Future() {
	  const [quality, setQuality] = React.useState(null);

  
	  
	  React.useEffect(() => {
		axios.get(baseURL).then((response) => {
		  setQuality(response.data.currentForecast[0]);
		  console.log(response.data.currentForecast[0])
		//   forecastSummaryFixed5 = forecastSummaryFixed4
	
		});
	  }, []);
	

	//   if (!quality) return null;
	//   console.log(quality.forecastText) 
	//   if(quality.forecastText != undefined) {
	// 	// var forecastSummaryFixed = quality.forecastText.replace(&lt;br/&gt;/, '>');
	// 	var forecastSummaryFixed = quality.forecastText.replace(/&#39;/g, "'");
	// 	var forecastSummaryFixed2 = forecastSummaryFixed.replace(/&gt;/g, '>');
	// 	var forecastSummaryFixed3 = forecastSummaryFixed2.replace(/&lt;/g, '<');
	// 	var forecastSummaryFixed4 = forecastSummaryFixed3.replace(/<&lt;>/g, '<');
	// 	// ReactDOM.render(forecastSummaryFixed4)
	// 	console.log(forecastSummaryFixed4)	
	// }
	  


	// const FurtherInformation = () => {
	// 	const [showInfo, setshowInfo] = React.useState(false)
	// 	const onClick = () => setshowInfo(true)
	// 	return (
	// 	  <div>
	// 		<input type="submit" value="Search" onClick={onClick} />
	// 		{ showInfo ? <Information /> : null }
	// 	  </div>
	// 	)
	//   }
	  
	//   const Information = () => (
	// 	<div id="results" className="more-information">
	// 	  Some Results
	// 	</div>
	//   )
	  
	//   ReactDOM.render(<FurtherInformation />, document.querySelector("#container"))

	return (
		<div class="forecast">
		   
		  
		  <p>Forecast: {quality.forecastBand}</p>
		  <img src={(`./${quality.forecastBand}.png`)} alt={(`${quality.forecastBand}`)}/>
		  
		  <p>Summary: {quality.forecastSummary}</p>
		  <Forecast></Forecast>
		  
		  <description class="n02Band">n02Band: {quality.nO2Band}</description>
		  <img src={(`./${quality.nO2Band}.png`)} alt={(`${quality.nO2Band}`)}/>
		  <description class="o3Band">o3Band: {quality.o3Band}</description>
		  <img src={(`./${quality.o3Band}.png`)} alt={(`${quality.o3Band}`)}/>
		  <description class="pM10Band">pM10Band: {quality.pM10Band}</description>
		  <img src={(`./${quality.pM10Band}.png`)} alt={(`${quality.pM10Band}`)}/>
		  <description class="pM25Band">pM25Band: {quality.pM25Band}</description>
		  <img src={(`./${quality.pM25Band}.png`)} alt={(`${quality.pM25Band}`)}/>
		  <description class="s02Band">sO2Band: {quality.sO2Band}</description>
		  <img src={(`./${quality.sO2Band}.png`)} alt={(`${quality.sO2Band}`)}/>
		</div>
	  );
	}























