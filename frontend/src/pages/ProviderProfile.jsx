import React, { useState } from "react";
import ProviderHeader from '../components/ProviderHeader'
import ProviderAbout from "../components/ProviderAbout";
import ProviderAvailability from "../components/ProviderAvailability";
import ProviderBookingSidebar from "../components/ProviderBookingSidebar";
import ProviderServicesAndPricing from "../components/ProviderServicesAndPricing";
import ProviderReviews from "../components/ProviderReviews";

const ProviderProfile = () => {
const provider = {
  id: "prov_001",                 
  name: "Dr. Sarah Khan",         
  profession: "Dermatologist",    // renamed to match <ProviderHeader>
  experience: "10 years",         
  rating: 4.8,                    
  reviewsCount: 120,              
  location: "Clifton Block 5, Karachi, Pakistan", // simplified string for header
  languages: ["English", "Urdu"], 
  image: "/images/providers/sarah.png", 
  verified: true,                 
  description:
    "Experienced dermatologist with over 10 years of practice. Specializes in treating skin conditions, cosmetic procedures, and patient skincare guidance.",

  // --- SERVICES & PRICING ---
  services: [
    {
      name: "Skin Consultation",
      description: "Comprehensive skin check-up and consultation.",
      duration: "30 min",
      price: 2000,
    },
    {
      name: "Acne Treatment",
      description: "Personalized acne treatment plan and medications.",
      duration: "45 min",
      price: 3000,
    },
    {
      name: "Laser Therapy",
      description: "Advanced laser treatment for skin rejuvenation.",
      duration: "60 min",
      price: 5000,
    },
  ],

  // --- AVAILABILITY ---
  availability: [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "10:00 AM - 4:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 3:00 PM" },
    { day: "Friday", hours: "Closed" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],

  // --- REVIEWS ---
  reviews: [
    {
      user: "Ali Raza",
      rating: 5,
      comment: "Dr. Sarah is very professional and helped me with my acne issues!",
    },
    {
      user: "Fatima Noor",
      rating: 4,
      comment: "Good consultation, but the wait time was longer than expected.",
    },
    {
      user: "Ahmed Khan",
      rating: 5,
      comment: "Excellent doctor, very patient and knowledgeable. Highly recommend.",
    },
  ],

  // --- ABOUT ---
  about:
    "Dr. Sarah Khan is a board-certified dermatologist with over 10 years of experience in treating skin conditions, cosmetic dermatology, and advanced skincare treatments. She is passionate about helping patients achieve healthy and glowing skin.",

  // --- FEE ---
  fee: {
    amount: 2500,
    currency: "PKR",
  },

  // --- ACTIONS ---
  actions: {
    bookNow: true,
    viewProfile: true,
  },
};

  const [activeTab, setActiveTab] = useState("services");
  const [selectedService, setSelectedService] = useState(provider.services[0]);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* LEFT SIDE */}
      <div className="md:col-span-2">
        {/* Header */}
        <ProviderHeader provider={provider} />

        {/* Tabs */}
        <div className="border-b border-gray-300  mt-4 flex space-x-6 text-sm font-medium">
          {["services", "availability", "reviews", "about"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 ${
                activeTab === tab
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-500"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="mt-4">
          {activeTab === "services" && (
            <ProviderServicesAndPricing
              services={provider.services}
              setSelectedService={setSelectedService}
            />
          )}
          {activeTab === "availability" && (
            <ProviderAvailability availability={provider.availability} />
          )}
          {activeTab === "reviews" && <ProviderReviews reviews={provider.reviews} />}
          {activeTab === "about" && <ProviderAbout about={provider.about} />}
        </div>
      </div>

      {/* RIGHT SIDE - Booking */}
      <ProviderBookingSidebar
        services={provider.services}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
    </div>
  );
};


export default ProviderProfile;
