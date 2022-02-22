import React, { useState, useEffect } from 'react';
import axios from 'axios';

// export default function AirQuality() {


  // const data = {
  //   "$id": "1",
  //   "$type": "Tfl.Api.Presentation.Entities.LondonAirForecast, Tfl.Api.Presentation.Entities",
  //   "updatePeriod": "hourly",
  //   "updateFrequency": "1",
  //   "forecastURL": "http://londonair.org.uk/forecast",
  //   "disclaimerText": "This forecast is intended to provide information on expected pollution levels in areas of significant public exposure. It may not apply in very specific locations close to unusually strong or short-lived local sources of pollution.",
  //   "currentForecast": [
  //       {
  //           "$id": "2",
  //           "$type": "Tfl.Api.Presentation.Entities.CurrentForecast, Tfl.Api.Presentation.Entities",
  //           "forecastType": "Current",
  //           "forecastID": "35268",
  //           "forecastBand": "Low",
  //           "forecastSummary": "Low air pollution forecast valid from Monday 21 February to end of Wednesday 23 February GMT",
  //           "nO2Band": "Low",
  //           "o3Band": "Low",
  //           "pM10Band": "Low",
  //           "pM25Band": "Low",
  //           "sO2Band": "Low",
  //           "forecastText": "Unsettled conditions will remain. Changeable and often windy with occasional showers. Little by way of imported pollution is expected. &lt;br/&gt;&lt;br/&gt;Air pollution is expected to remain &#39;Low&#39; throughout the forecast period for the following pollutants:&lt;br/&gt;&lt;br/&gt;Ozone&lt;br/&gt;PM10 Particulates&lt;br/&gt;PM2.5 Particulates&lt;br/&gt;Sulphur Dioxide&lt;br/&gt;Nitrogen Dioxide&lt;br/&gt;"
  //       },
  //       {
  //           "$id": "3",
  //           "$type": "Tfl.Api.Presentation.Entities.CurrentForecast, Tfl.Api.Presentation.Entities",
  //           "forecastType": "Future",
  //           "forecastID": "35268",
  //           "forecastBand": "Low",
  //           "forecastSummary": "Low air pollution forecast valid from Monday 21 February to end of Wednesday 23 February GMT",
  //           "nO2Band": "Low",
  //           "o3Band": "Low",
  //           "pM10Band": "Low",
  //           "pM25Band": "Low",
  //           "sO2Band": "Low",
  //           "forecastText": "Unsettled conditions will remain. Changeable and often windy with occasional showers. Little by way of imported pollution is expected. &lt;br/&gt;&lt;br/&gt;Air pollution is expected to remain &#39;Low&#39; throughout the forecast period for the following pollutants:&lt;br/&gt;&lt;br/&gt;Ozone&lt;br/&gt;PM10 Particulates&lt;br/&gt;PM2.5 Particulates&lt;br/&gt;Sulphur Dioxide&lt;br/&gt;Nitrogen Dioxide&lt;br/&gt;"
  //       }
  //   ]
  // };
  
  // function data (weekNumber, minPosition) {
  //   let results = []
  //   if (weekNumber === 21) {
  //     results = resultsWeek21
  //   } else if (weekNumber === 22) {
  //     results = resultsWeek22
  //   }
  //   return (typeof minPosition === 'number' && minPosition <= 20) ? results.slice(0, minPosition) : results
  // }
  
  // function calculateGoalDifference (gf, ga) {
  //   return gf - ga
  // }
  
  // function calculatePoints (wins, draws) {
  //   return (wins * 3) + draws
  // }
  
  // function forecast (data) {
  //   return (
  //     <p>
  //       <tr>
  //       <td>{data.currentForecast.forecastBand}</td>
  //       <td>{data.currentForecast.forecastBand}</td>
  //       <td>{data.currentForecast.forecastBand}</td>
        
  //       </tr>
  //         </p>
  
  //   );
  // }
  
  
  // export class AirQuality extends React.Component {
  //   constructor (props) {
  //     super(props)}}
  
    // componentDidMount () {
    //   console.log('componentDidMount called')
    // }
  
    // setWeekNumber (weekNumber) {
    //   this.setState({
    //     weekNumber: weekNumber
    //   })
    // }
  
    // setMinPosition (minPosition) {
    //   this.setState({
    //     minPosition: minPosition
    //   })
    // }
  
    // handleChange = (event) => {
    //   console.log(`handleChange called with value: ${event.target.value}`)
    //   this.setWeekNumber(parseInt(event.target.value))
    // }
  
    // handleMinimumPositionChange = (event) => {
    //   console.log(`handleMinimumPositionChange called with value: ${event.target.value}`)
    //   const val = parseInt(event.target.value)
    //   if (val >= 0 && val <= 20) {
    //     this.setMinPosition(val)
    //   } else {
    //     this.setErrorMessage('enter a value between 0 and 20')
    //   }
    // }
  
  //   render () {
  //     return <div>
        
  //       <table>
  //         <tbody>
            
  //           {data.map((element, index) => (
  //             <forecast
  //               key={index}
  //               place={index + 1}
  //               teamName={element.teamName}
  //               played={element.played}
  //               wins={element.wins}
  //               losses={element.losses}
  //               draws={element.draws}
  //               gf={element.gf}
  //               ga={element.ga}
  //               pts={element.pts} />
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   }
  // }
  

























