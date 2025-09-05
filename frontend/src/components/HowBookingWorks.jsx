import React from "react";
import Header from "./Header";
import { FaSearch, FaStar, FaCalendarAlt, FaClock, FaCreditCard } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <><FaSearch className="text-orange-500" /><FaStar className="text-orange-500 ml-1" /></>,
    title: "Search & compare",
    description: "Browse verified providers by price, rating, and availability.",
  },
  {
    id: 2,
    icon: <><FaCalendarAlt className="text-orange-500" /><FaClock className="text-orange-500 ml-1" /></>,
    title: "Book a slot",
    description: "Pick a time that works. Add notes if needed.",
  },
  {
    id: 3,
    icon: <FaCreditCard className="text-orange-500" />,
    title: "Pay securely",
    description: "Stripe Checkout confirms your booking instantly.",
  },
];

const HowBookingWorks = () => {
  return (
    <section className="py-12 text-center max-w-6xl mx-auto">
      <Header text="How booking works" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-lg font-bold text-orange-500 mb-3">
              {step.id}
            </div>
            <div className="flex space-x-2 text-2xl mb-2">{step.icon}</div>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{step.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-orange-500 cursor-pointer">See customer FAQs</p>
    </section>
  );
};

export default HowBookingWorks;
