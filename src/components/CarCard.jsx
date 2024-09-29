const products = [
    {
      id: 1,
      name: 'Hyundai Alcazar Prestige',
      href: '/car',
      imageSrc: '/assets/v1.jpeg',
      imageAlt: "carImage",
      price: 'v1',    
      },
      {
        id: 2,
        name: 'XUV700 MX',
        href: '/car',
        imageSrc: '/assets/v2.jpeg',
        imageAlt: "carImage",
        price: 'v2',
      },
      {
        id: 3,
        name: 'Thar Roxx AX7',
        href: '/car',
        imageSrc: '/assets/v3.jpeg',
        imageAlt: "carImage",
        price: 'v3',
      },
      {
        id: 4,
        name: 'Kia Seltos HTK Plus',
        href: '/car',
        imageSrc: '/assets/v4.jpeg',
        imageAlt: "carImage",
        price: 'v4',
      },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Vehicles Assigned to You</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  