const features = [
  { name: 'Vehicle ID', description: 'v1' },
  { name: 'Model & Year', description: 'Hyundai Alcazar Prestige 1.5 Diesel MT 7STR - 2024' },
  { name: 'Transmission', description: 'Manual - 6 Gears' },
  { name: 'Engine', description: '1493 CC, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC' },
  { name: 'Fuel Type', description: 'Diesel (50L)' },
  { name: 'Drive Train', description: 'FWD' },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-8 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Specifications</h2>
          <p className="mt-4 text-gray-500">
            
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid gap-4 sm:gap-6 lg:gap-8">
          <img
            alt="Car Image"
            src="/assets/v1.jpeg"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}
