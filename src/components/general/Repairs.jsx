import React from 'react'

const recRepairs = [
  { obdCode: 'P1001', severity: 'needs immediate attention', description: 'Made from natural materials. Grain and color vary with each item.', solution: 'some solution'},
  { obdCode: 'B2031', severity: 'needs caution', description: 'Made from natural materials. Grain and color vary with each item.', solution: 'some solution'},
]

const Repairs = () => {
  return (
    <>
      {/* {recRepairs.forEach()} */}
      <section className="py-16 mt-10">
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 text-center'>Recommended Repairs</h1>
        <div className="mt-20 flex justify-center items-center flex-col px-8 gap-y-10">
          {
            recRepairs.map((data, idx) => (
              <div key={idx} className="max-w-xl mx-10 p-6 bg-white border border-gray-200 rounded-lg shadow">
                  <span href="#" className="bg-red-100 hover:bg-blue-200 text-red-800 text-xs font-sm mb-2 px-2.5 py-0.5 rounded border border-red-400 inline-flex items-center justify-center">{data.severity}</span>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">DTC: {data.obdCode}</h5>
                  <p className="mb-2 font-normal text-gray-700">{data.description}</p>
                  <p className="mb-2 font-normal text-gray-700">Solution: {data.solution}</p>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Repairs