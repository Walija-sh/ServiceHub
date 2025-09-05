// src/components/ProviderCTA.jsx
import { FaBriefcase, FaUserPlus } from "react-icons/fa";

const ProviderCTA = () => {
  return (
    <div className="bg-orange-500 py-8 text-white ">
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl  mx-auto">
        {/* Provider Side */}
      <div className="flex flex-col items-center text-center px-6">
        <FaBriefcase size={36} className="mb-3" />
        <h3 className="text-xl font-semibold">Are you a service provider?</h3>
        <p className="text-sm mt-2">Start getting bookings</p>
        <button className="mt-4 bg-white text-orange-500 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition">
          Become a Provider
        </button>
      </div>

      {/* New User Side */}
      <div className="flex flex-col items-center text-center px-6">
        <FaUserPlus size={36} className="mb-3" />
        <h3 className="text-xl font-semibold">New here?</h3>
        <p className="text-sm mt-2">Create your free account</p>
        <button className="mt-4 bg-white text-orange-500 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition">
          Sign Up
        </button>
      </div>
      </div>
    </div>
  );
};

export default ProviderCTA;
