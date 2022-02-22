import React from "react";
import AirQuality from "./AirQuality";
export function HomePage() {


  return (
    <div>

      <heading className="heading">
        London's Daily Air Quality Reading
      </heading>
      <div class="reading">
        <AirQuality ></AirQuality>
        
      </div>
    </div>
  );
}
