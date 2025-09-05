import React from 'react'

const ProviderBookingSidebar = ({ services, selectedService, setSelectedService }) => (
  <div className="border border-gray-300  rounded-xl p-4 shadow-md h-fit">
    <h3 className="text-lg font-semibold mb-4">Book Appointment</h3>
    <div className="space-y-3">
      {/* Select Service */}
      <select
        value={selectedService.name}
        onChange={(e) =>
          setSelectedService(
            services.find((s) => s.name === e.target.value)
          )
        }
        className="w-full border border-gray-300  rounded-lg p-2"
      >
        {services.map((service, i) => (
          <option key={i} value={service.name}>
            {service.name} - ${service.price}
          </option>
        ))}
      </select>

      {/* Date */}
      <input type="date" className="w-full border border-gray-300  rounded-lg p-2" />

      {/* Time */}
      <div className="flex gap-2">
        <button className="border border-gray-300  px-3 py-1 rounded-lg">9:00 AM</button>
        <button className="border border-gray-300  px-3 py-1 rounded-lg">10:30 AM</button>
        <button className="border border-gray-300  px-3 py-1 rounded-lg">2:00 PM</button>
      </div>

      {/* Notes */}
      <textarea
        placeholder="Any special requests..."
        className="w-full border border-gray-300  rounded-lg p-2 text-sm"
      ></textarea>

      {/* Price */}
      <p className="text-right font-bold text-orange-500">
        Total: ${selectedService.price}
      </p>

      {/* Submit */}
      <button className="w-full bg-orange-500 text-white py-2 rounded-lg">
        Proceed to Payment
      </button>
    </div>
  </div>
);


export default ProviderBookingSidebar