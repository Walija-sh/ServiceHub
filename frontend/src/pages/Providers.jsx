import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import ProviderCard from "../components/ProviderCard"; 
import { IoIosSearch } from "react-icons/io";

const providersData = [
  {
    name: "Mike Johnson",
    service: "Professional Barber",
    price: "From $25",
    rating: "5.0",
    reviews: 127,
    distance: 0.8,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sarah Wilson",
    service: "Math Tutor",
    price: "From $40",
    rating: "4.9",
    reviews: 89,
    distance: 1.2,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "David Chen",
    service: "Auto Mechanic",
    price: "From $80",
    rating: "5.0",
    reviews: 203,
    distance: 2.1,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Emily Rodriguez",
    service: "Hair Stylist",
    price: "From $35",
    rating: "4.8",
    reviews: 156,
    distance: 0.5,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Alex Thompson",
    service: "Piano Teacher",
    price: "From $50",
    rating: "4.7",
    reviews: 94,
    distance: 1.8,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "James Parker",
    service: "Fitness Trainer",
    price: "From $60",
    rating: "4.6",
    reviews: 78,
    distance: 1.0,
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const Providers = () => {
  const [providers, setProviders] = useState(providersData);

  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      {/* Search & Filters */}
        <div className="flex items-center px-4 border border-gray-300 rounded-full focus-within::border-2 focus-within::border-orange-400 mb-6 max-w-4xl mx-auto">
           {/* Search bar */}
          <input
            type="text"
            placeholder="Search for barbers, tutors, mechanics..."
            className="flex-1   px-4 py-2 outline-none "
          />
          <IoIosSearch />
        </div>
      <div className="mb-6">
        <div className="flex flex-col  md:flex-row md:justify-between md:items-center gap-4">
         {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <button className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm">
            <FaMapMarkerAlt className="inline mr-1" /> Current Location
          </button>
          <button className="px-3 py-1 rounded-full bg-orange-500 text-white text-sm">Barber</button>
          <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">Tutor</button>
          <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">Mechanic</button>
          <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">4+ Stars</button>
          <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">Available Today</button>
        </div>
          {/* Sort dropdown */}
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>Sort by Relevance</option>
            <option>Lowest Price</option>
            <option>Highest Rating</option>
            <option>Nearest</option>
          </select>

        </div>

        
      </div>

      {/* Providers List */}
      <h2 className="text-xl font-semibold mb-4">Available Providers</h2>
      <p className="text-sm text-gray-500 mb-6">{providers.length} providers found in your area</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {providers.map((provider, index) => (
          <ProviderCard key={index} provider={provider} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 border rounded-lg text-orange-600 border-orange-400 hover:bg-orange-50">
          Load More Providers
        </button>
      </div>
    </div>
  );
};

export default Providers;
