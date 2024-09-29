import React from 'react';
import { useParams } from 'react-router-dom';

const recRepairs = [
  { obdCode: 'P0301', part: 'engine', severity: 'needs immediate attention', description: 'Cylinder 1 Misfire Detected', solution: 'Check spark plugs and replace if necessary. Inspect ignition coils for damage or wear. Verify fuel injector operation and clean or replace if faulty' },
  { obdCode: 'P0700', part: 'powertrain', severity: 'needs caution', description: 'Transmission Control System Malfunction', solution: 'Scan the transmission control module (TCM) for more specific transmission-related codes. Inspect the wiring and connectors for the TCM. Replace the transmission fluid if necessary.' },
  // Add more repair data as needed
];

export default function Repairs({ isDiagnostics }) {
  const { variable } = useParams(); // Get the 'variable' from the URL
  
  return (
    <>
      <section className="m-16">
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 text-center'>Recommended Repairs</h1>
        <p className="text-md font-extralight tracking-tight text-center">Here are the recommended repairs based on the diagnostics.</p>
        
        <div className="mt-10 flex flex-wrap justify-center items-center px-8 gap-y-10 gap-x-6">
          {
            recRepairs
              .filter(data => !isDiagnostics || data.part === variable) // Filter data if isDiagnostics is true
              .map((data, idx) => (
                <div key={idx} className="max-w-xl mx-4 p-5 bg-white border border-gray-200 rounded-lg shadow">
                  <span className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-sm mb-2 px-2.5 py-0.5 rounded border border-blue-400 inline-flex items-center justify-center">{data.part}</span>
                  <span className="bg-red-100 hover:bg-blue-200 text-red-800 text-xs font-sm mx-4 mb-2 px-2.5 py-0.5 rounded border border-red-400 inline-flex items-center justify-center">{data.severity}</span>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">DTC: {data.obdCode}</h5>
                  <p className="mb-2 font-normal text-gray-700">{data.description}</p>
                  <p className="mb-2 font-medium text-blue-700">Solution: {data.solution}</p>
                </div>
              ))
          }
        </div>
      </section>
    </>
  );
}
