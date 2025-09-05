import React from 'react'

const ProviderAvailability =({ availability }) => (
  <div>
    <h3 className="text-lg font-semibold mb-3">Availability</h3>
    <ul className="space-y-2">
      {availability.map((day, i) => (
        <li key={i} className="flex justify-between">
          <span className="font-medium">{day.day}</span>
          <span className="text-gray-500">{day.hours}</span>
        </li>
      ))}
    </ul>
  </div>
);
export default ProviderAvailability