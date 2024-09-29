import React from 'react'

const repairs = [
    { date: '24th Sept 2024', issueCode: 'P0735', issueDesc: 'Gear 5 Incorrect Ratio', solution: 'Check for internal transmission issues like damaged gears. Inspect shift solenoids and replace if necessary. Perform a transmission fluid flush and refill.', doneBy: 'Mechanic1'},
    { date: '18th Aug 2024', issueCode: 'P0740', issueDesc: 'Torque Converter Clutch Circuit Malfunction', solution: 'Check the torque converter for damage or wear. Inspect and repair the transmission valve body. Replace the torque converter solenoid if found to be faulty', doneBy: 'Mechanic2'},
    { date: '9th July 2024', issueCode: 'P0171', issueDesc: 'System Too Lean (Bank 1)', solution: 'Inspect for any vacuum leaks in the intake manifold. Clean or replace the mass airflow sensor (MAF) after inspection. Check the fuel pressure and fuel filter.', doneBy: 'Mechanic3'}
]
const RepairHistory = () => {
  return (
    <>
        <section className='my-10'>
            <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl mt-10">Repairs History</h2>
            <p className="text-md font-extralight tracking-tight text-center">Outlines a record of repairs done on the vehicle in the past along with the issues encountered</p>
            <div className="grid grid-cols-3 gap-x-10 mt-10 mx-10">
            {
                repairs.map((rep, idx) => (
                <div key={idx} className="col-span-1 flex flex-col bg-white border shadow-sm rounded-xl">
                    <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-gray-800">
                        {rep.issueCode}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                        {rep.issueDesc}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-x-1 font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                        {rep.solution}
                        </div>
                    </div>
                    <div className="bg-gray-100 border-t rounded-b-xl py-3 px-4 md:py-4 md:px-5">
                        <p className="mt-1 text-sm text-gray-500">
                        By <strong>{rep.doneBy}</strong> on <strong>{rep.date}</strong>
                        </p>
                    </div>
                </div>
                ))
            }
        </div>
        </section>
        
    </>
  )
}

export default RepairHistory