import React from "react";
import AirQuality from "./AirQuality";
export function HomePage() {


  return (
    <div className="view">

      <heading className="heading">
        London's Air Quality
      </heading>
      <div>
        <AirQuality ></AirQuality>
        
      </div>
    </div>
  );
}
