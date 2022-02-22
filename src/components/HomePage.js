import React from "react";
import AirQuality from "./AirQuality";
export function HomePage() {


  return (
    <div>

      <heading className="heading">
        London's Daily Air Quality Reading
      </heading>
      <div>
        <AirQuality></AirQuality>
        <p>
          Sample text
        </p>


        <div>
          Empty Div
        </div>
      </div>
    </div>
  );
}
