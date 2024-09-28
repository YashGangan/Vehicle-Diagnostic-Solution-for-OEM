import React, { useState } from 'react';

export default function Metrics() {
    const [popoverVisible, setPopoverVisible] = useState(null); // Track which popover is visible

    const stats = [
        {
            icon: <i className="fa-solid fa-circle-exclamation fa-xl text-red-600"></i>,
            title: "Engine",
            description: "Engine Issues."
        },
        {
            icon: <i className="fa-solid fa-circle-check fa-xl text-blue-600"></i>,
            title: "PowerTrain",
            description: "Total downloads of the app."
        },
        {
            icon: <i className="fa-solid fa-circle-check fa-xl text-blue-600"></i>,
            title: "WheelBase",
            description: "Number of countries using our platform."
        },
        {
            icon: <i className="fa-solid fa-circle-check fa-xl text-blue-600"></i>,
            title: "Suspension",
            description: "Revenue generated to date."
        },
        {
            icon: <i className="fa-solid fa-circle-check fa-xl text-blue-600"></i>,
            title: "Fuel Tank",
            description: "Total downloads of the app."
        },
        {
            icon: <i className="fa-solid fa-circle-check fa-xl text-blue-600"></i>,
            title: "Interior",
            description: "Number of countries using our platform."
        },
        {
            icon: <i className="fa-solid fa-circle-exclamation fa-xl text-red-600"></i>,
            title: "Exhaust",
            description: "Revenue generated to date."
        },
        {
            icon: <i className="fa-solid fa-circle-check fa-xl text-blue-600"></i>,
            title: "Body",
            description: "Total downloads of the app."
        },
    ];

    return (
        <section className="py-14">
            <div className="max-w-screen-md mx-auto px-4 md:px-8">
                <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center'>Health Status</h1>
                <ul className="grid grid-cols-4 grid-rows-2 items-center justify-center mt-20 gap-x-16 gap-y-10 sm:flex-row sm:flex-wrap md:gap-x-24">
                    {
                        stats.map((item, idx) => (
                            <li 
                                key={idx} 
                                className="relative text-center"
                                onMouseEnter={() => setPopoverVisible(idx)} // Show popover
                                onMouseLeave={() => setPopoverVisible(null)} // Hide popover
                            >
                                <h4 className="text-4xl rounded-full p-1 text-white font-semibold">
                                    {item.icon}
                                </h4>
                                <p className="mt-3 text-gray-600 font-medium">{item.title}</p>
                                
                                {/* Tooltip Popover */}
                                {popoverVisible === idx && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-full mt-[-12px] z-10 w-64 text-sm text-gray-800 transition-opacity duration-300 bg-gray-100 border border-gray-200 rounded-lg shadow-sm">
                                        <div className="px-3 py-2 text-white bg-gray-800 border-b border-gray-200 rounded-t-lg">
                                            <h3 className="font-semibold text-white">{item.title}</h3>
                                        </div>
                                        <div className="px-3 py-2">
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="popover-arrow" style={{ top: '100%' }}></div>
                                    </div>
                                )}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
