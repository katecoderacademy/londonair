import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AirQuality() {


  const data = {
    "$id": "1",
    "$type": "Tfl.Api.Presentation.Entities.LondonAirForecast, Tfl.Api.Presentation.Entities",
    "updatePeriod": "hourly",
    "updateFrequency": "1",
    "forecastURL": "http://londonair.org.uk/forecast",
    "disclaimerText": "This forecast is intended to provide information on expected pollution levels in areas of significant public exposure. It may not apply in very specific locations close to unusually strong or short-lived local sources of pollution.",
    "currentForecast": [
        {
            "$id": "2",
            "$type": "Tfl.Api.Presentation.Entities.CurrentForecast, Tfl.Api.Presentation.Entities",
            "forecastType": "Current",
            "forecastID": "35268",
            "forecastBand": "Low",
            "forecastSummary": "Low air pollution forecast valid from Monday 21 February to end of Wednesday 23 February GMT",
            "nO2Band": "Low",
            "o3Band": "Low",
            "pM10Band": "Low",
            "pM25Band": "Low",
            "sO2Band": "Low",
            "forecastText": "Unsettled conditions will remain. Changeable and often windy with occasional showers. Little by way of imported pollution is expected. &lt;br/&gt;&lt;br/&gt;Air pollution is expected to remain &#39;Low&#39; throughout the forecast period for the following pollutants:&lt;br/&gt;&lt;br/&gt;Ozone&lt;br/&gt;PM10 Particulates&lt;br/&gt;PM2.5 Particulates&lt;br/&gt;Sulphur Dioxide&lt;br/&gt;Nitrogen Dioxide&lt;br/&gt;"
        },
        {
            "$id": "3",
            "$type": "Tfl.Api.Presentation.Entities.CurrentForecast, Tfl.Api.Presentation.Entities",
            "forecastType": "Future",
            "forecastID": "35268",
            "forecastBand": "Low",
            "forecastSummary": "Low air pollution forecast valid from Monday 21 February to end of Wednesday 23 February GMT",
            "nO2Band": "Low",
            "o3Band": "Low",
            "pM10Band": "Low",
            "pM25Band": "Low",
            "sO2Band": "Low",
            "forecastText": "Unsettled conditions will remain. Changeable and often windy with occasional showers. Little by way of imported pollution is expected. &lt;br/&gt;&lt;br/&gt;Air pollution is expected to remain &#39;Low&#39; throughout the forecast period for the following pollutants:&lt;br/&gt;&lt;br/&gt;Ozone&lt;br/&gt;PM10 Particulates&lt;br/&gt;PM2.5 Particulates&lt;br/&gt;Sulphur Dioxide&lt;br/&gt;Nitrogen Dioxide&lt;br/&gt;"
        }
    ]
  }

  return (
    <p>
       "$id": "3",
            "forecastType": "Future",
            <p/>"forecastID": "35268",
            <p/>"forecastBand": "Low",
            <p/>"forecastSummary": "Low air pollution forecast valid from Monday 21 February to end of Wednesday 23 February GMT",
            <p/>"nO2Band": "Low",
            <p/>"o3Band": "Low",
            <p/>"pM10Band": "Low",
            <p/>"pM25Band": "Low",
            <p/>"sO2Band": "Low",
            <p/>"forecastText": "Unsettled conditions will remain. Changeable and often windy with occasional showers. Little by way of imported pollution is expected.
            Air pollution is expected to remain Low throughout the forecast period for the following pollutants:
            <ul><li>Ozone</li>
            <li>PM10 Particulates</li>
            <li>PM2.5 Particulates</li>
            <li>Sulphur Dioxide</li>
            <li>Nitrogen Dioxide"</li>
            </ul>
        </p>

  );
}