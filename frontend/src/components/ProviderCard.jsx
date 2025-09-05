import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ProviderCard = ({ provider }) => {
  return (
    <div className=" rounded-2xl shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition">
      <div className="flex items-center space-x-3">
        <img
          src={provider.image}
          alt={provider.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="font-semibold">{provider.name}</h4>
          <p className="text-sm text-gray-500">{provider.service}</p>
        </div>
      </div>

      <div className="mt-3">
        <p className="font-bold">{provider.price}</p>
        <div className="flex items-center text-yellow-500 text-sm">
          <FaStar className="mr-1" /> {provider.rating} ({provider.reviews})
        </div>
        <p className="text-xs text-gray-400">{provider.distance} km away</p>
      </div>

      <div className="flex gap-2 mt-4">
        <Link to={'/services/profile'} className="flex-1 border border-orange-500 rounded-lg px-3 py-1 text-sm hover:bg-gray-100">
          View Profile
        </Link>
        <button className="flex-1 bg-orange-500 text-white rounded-lg px-3 py-1 text-sm hover:bg-orange-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ProviderCard;
