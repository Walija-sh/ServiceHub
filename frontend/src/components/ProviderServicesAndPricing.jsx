import React from 'react'

import { FaRegClock } from "react-icons/fa";
// SERVICES & PRICING
const ProviderServicesAndPricing = ({ services, setSelectedService }) => (
  <div>
    <h3 className="text-lg font-semibold mb-3">Services & Pricing</h3>
    {services.map((service, i) => (
      <div
        key={i}
        className="flex justify-between items-center border border-gray-300  rounded-lg p-4 mb-3"
      >
        <div>
          <h4 className="font-medium">{service.name}</h4>
          <p className="text-sm text-gray-500">{service.description}</p>
          <p className="text-sm text-gray-400 flex items-center">
            <FaRegClock className="mr-1" /> {service.duration}
          </p>
        </div>
        <div className="text-right">
          <p className="font-bold text-orange-500">${service.price}</p>
          <button
            onClick={() => setSelectedService(service)}
            className="mt-2 bg-orange-500 text-white px-3 py-1 rounded-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default ProviderServicesAndPricing