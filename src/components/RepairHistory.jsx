import React from 'react'

const repairs = [
    { date: '24th Sept 2024', issueCode: 'P1092', issueDesc: 'Problem Description', solution: 'Problem Solution', doneBy: 'Kale Mechanic'},
    { date: '24th Sept 2024', issueCode: 'P1092', issueDesc: 'Problem Description', solution: 'Problem Solution', doneBy: 'Kale Mechanic'},
    { date: '24th Sept 2024', issueCode: 'P1092', issueDesc: 'Problem Description', solution: 'Problem Solution', doneBy: 'Kale Mechanic'}
]
const RepairHistory = () => {
  return (
    <>
        <section>
            <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Repairs History</h2>
            <p className="text-md font-extralight tracking-tight text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, magnam.</p>
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