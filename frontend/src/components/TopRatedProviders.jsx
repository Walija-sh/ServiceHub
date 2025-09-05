import React from "react";
import Header from "./Header";
import ProviderCard from "./ProviderCard.jsx";
import assets from "../assets/assets.js";

const providers = [
  {
    id: 1,
    name: "Ahsan Khan",
    service: "Barber",
    price: "PKR 1500/hr",
    rating: "4.3",
    reviews: "120",
    distance: "2.3",
    image: "https://via.placeholder.com/50", // replace with real img
  },
  {
    id: 2,
    name: "Maira Siddiqui",
    service: "Math Tutor",
    price: "PKR 2000/hr",
    rating: "4.8",
    reviews: "95",
    distance: "1.8",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Bilal Ahmed",
    service: "Bike Mechanic",
    price: "PKR 2500/visit",
    rating: "4.5",
    reviews: "103",
    distance: "3.1",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    name: "Hassan Ali",
    service: "Electrician",
    price: "PKR 1800/hr",
    rating: "4.2",
    reviews: "126",
    distance: "1.2",
    image: "https://via.placeholder.com/50",
  },
];

const TopRatedProviders = () => {
  return (
    <section className="py-12 max-w-6xl mx-auto">
      <Header text="Top-rated in your area" />
<div className="grid gap-2 md:grid-cols-[60%_1fr]">
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {providers.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}

      </div>
        {/* Map box */}
        <div className=" rounded-2xl shadow-sm flex items-center justify-center bg-gray-100">
          <img
            src={assets.map} // placeholder map
            alt="Map"
            className="rounded-lg"
          />
        </div>
</div>
    </section>
  );
};

export default TopRatedProviders;
