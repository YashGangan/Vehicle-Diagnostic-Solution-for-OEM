import React from "react";
import { TEChart } from "tw-elements-react";

export default function ChartRadar() {
    return (
    <div className="max-w-screen-md text-center mx-auto my-20">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        Overall Performance
      </h1>
      <p className="text-md font-extralight tracking-tight text-center mb-10">A brief about the .</p>
      <TEChart
      type="radar"
      data={{
        labels: [
          "Engine",
          "Powertrain",
          "WheelBase",
          "Suspension",
          "FuelTank",
          "Interior",
          "Exhaust ",
          "Body ",
        ],
        datasets: [
          {
            label: "Overall",
            data: [2112, 2343, 1700, 2910, 2365, 2190, 2763, 2103],
          },
        ],
      }}
    /> 
    </div>
  );
}

{/* <TEChart
      type="radar"
      data={{
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday ",
        ],
        datasets: [
          {
            label: "Traffic",
            data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
          },
        ],
      }}
    /> */}