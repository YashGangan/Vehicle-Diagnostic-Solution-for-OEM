const features = [
  { name: 'Vehicle ID', description: 'Made from natural materials. Grain and color vary with each item.' },
  { name: 'Model & Year', description: 'Designed by Good Goods, Inc.' },
  { name: 'Transmission', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Engine', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Fuel Type', description: 'Hand sanded and finished with natural oil' },
  { name: 'Drive Train', description: 'Wood card tray and 3 refill packs' },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-8 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
            steel divider separates active cards from new ones, or can be used to archive important task lists.
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
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}
