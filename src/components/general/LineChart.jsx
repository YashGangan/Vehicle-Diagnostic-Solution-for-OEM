import React, { useState, useEffect } from "react";
import { TEChart } from "tw-elements-react";
import { useParams } from "react-router-dom"; // Import the useParams hook

export default function ChartLine() {
  const { variable } = useParams(); // Get the variable from the URL

  // Function to convert a string to Capital Case
  const toCapitalCase = (str) => {
    return str
      .split(' ') // Split the string by spaces (in case there are multiple words)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
      .join(' '); // Join the words back into a single string
  };

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: `${toCapitalCase(variable)} Diagnostics`, // Use Capital Case in the label
        data: [],
      },
    ],
  });

  // Function to generate a random value within a specified range
  const generateRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Function to generate the current time as label
  const getCurrentTime = () => new Date().toLocaleTimeString();

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prevData) => {
        const newTemperature = generateRandomValue(100, 300); // Example range: 100 - 300
        const currentTime = getCurrentTime();

        // Update chart data
        return {
          labels: [...prevData.labels, currentTime].slice(-10), // Keep only the last 10 time labels
          datasets: [
            {
              ...prevData.datasets[0],
              data: [...prevData.datasets[0].data, newTemperature].slice(-10), // Keep only the last 10 values
            },
          ],
        };
      });
    }, 2500); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="max-w-screen-md text-center mx-auto my-10">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        {toCapitalCase(variable)} Diagnostics {/* Display the diagnostic type in Capital Case */}
      </h1>
      <p className="text-md font-extralight tracking-tight text-center mb-10">
        Real-Time Monitoring of various {toCapitalCase(variable)} Parameters.
      </p>
      <TEChart type="line" data={chartData} />
    </div>
  );
}
