import React from 'react'
import { FaSearch, FaCalendarCheck, FaLock } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-3xl text-orange-500" />,
    title: "Search for Services",
    desc: "Find mechanics, tutors, barbers, electricians, and more in your area.",
  },
  {
    icon: <FaCalendarCheck className="text-3xl text-orange-500" />,
    title: "Book Appointment",
    desc: "Choose your preferred time and date that works for you.",
  },
  {
    icon: <FaLock className="text-3xl text-orange-500" />,
    title: "Pay Securely",
    desc: "Complete your payment online with our secure system.",
  },
];

const HowItWorks = () => {
 return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">How ServiceHub Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 space-y-4"
            >
              {step.icon}
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks