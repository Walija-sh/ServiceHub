import React from "react";
import { Link } from "react-router-dom";
import { FaCut, FaChalkboardTeacher, FaBolt, FaTools, FaFan, FaCar } from "react-icons/fa";
import Header from "./Header";

const services = [
  {
    id: 1,
    title: "Barber & Grooming",
    description: "Professional haircuts and grooming services",
    icon: <FaCut className="w-6 h-6 text-orange-500" />,
    link: "/services/barber",
  },
  {
    id: 2,
    title: "Tutoring & Coaching",
    description: "Expert tutors for all subjects and levels",
    icon: <FaChalkboardTeacher className="w-6 h-6 text-orange-500" />,
    link: "/services/tutor",
  },
  {
    id: 3,
    title: "Electrical & Repairs",
    description: "Licensed electricians for all your needs",
    icon: <FaBolt className="w-6 h-6 text-orange-500" />,
    link: "/services/electrician",
  },
  {
    id: 4,
    title: "Plumbing & Maintenance",
    description: "Reliable plumbers for repairs and installations",
    icon: <FaTools className="w-6 h-6 text-orange-500" />,
    link: "/services/plumber",
  },
  {
    id: 5,
    title: "AC/Appliance Repair",
    description: "Quick fixes for all your appliances",
    icon: <FaFan className="w-6 h-6 text-orange-500" />,
    link: "/services/appliances",
  },
  {
    id: 6,
    title: "Car/Bike Mechanic",
    description: "Expert mechanics for vehicles of all types",
    icon: <FaCar className="w-6 h-6 text-orange-500" />,
    link: "/services/mechanic",
  },
];

// 📌 Reusable Card Component
const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <Link
      to={link}
      className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-3 transition hover:shadow-xl hover:-translate-y-1"
    >
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 flex-grow">{description}</p>
      <span className="text-orange-500 text-xl">&gt;</span>
    </Link>
  );
};

// 📌 Main PopularServices Component
const PopularServices = () => {
  return (
    <section className="py-10 px-5 md:px-10 md:py-20 max-w-6xl  mx-auto">
      <Header text="Popular near you" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default PopularServices;
