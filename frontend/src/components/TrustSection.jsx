// src/components/TrustSection.jsx
import { FaShieldAlt, FaMobileAlt, FaIdCard, FaCheckCircle } from "react-icons/fa";

const trustItems = [
  {
    icon: <FaShieldAlt size={28} className="text-blue-500" />,
    title: "Secure Payments",
    desc: "PCI compliant Stripe Checkout.",
  },
  {
    icon: <FaMobileAlt size={28} className="text-green-500" />,
    title: "OTP Login",
    desc: "Email/Phone OTP. No passwords to forget.",
  },
  {
    icon: <FaIdCard size={28} className="text-purple-500" />,
    title: "Verified Providers",
    desc: "ID & phone verification checks.",
  },
  {
    icon: <FaCheckCircle size={28} className="text-orange-500" />,
    title: "Reliable Bookings",
    desc: "Only successful payments confirm a booking.",
  },
];

const TrustSection = () => {
  return (
    <div className="py-12 px-5 bg-gray-50 max-w-6xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-8">Built for trust</h2>
      <div className="grid md:grid-cols-4 gap-6 text-center">
        {trustItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-3">{item.icon}</div>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSection;
