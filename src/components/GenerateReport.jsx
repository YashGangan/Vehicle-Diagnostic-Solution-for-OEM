import React from 'react'

const GenerateReport = () => {
  return (
    <>
        <div className="flex justify-center items-center my-20">
            <div className="w-xl text-center p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Summarise Diagnostics</h5>
                <p className="mb-3 font-normal text-gray-700">Click the button below to create a comprehensive diagnostic report</p>
                <span className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Generate Report
                </span>
            </div>
        </div>
    </>
  )
}

export default GenerateReport