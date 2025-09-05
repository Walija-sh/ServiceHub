import React from 'react';
import assets from '../assets/assets';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle, FaShieldAlt, FaLock, FaClock } from 'react-icons/fa';

const HomeHero = () => {
  return (
    <div className=" bg-[#fef5f0] font-sans text-[#1a202c]">
      <div className="max-w-6xl  mx-auto px-4 py-5 md:py-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center  gap-4 md:gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-fit text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Book trusted local <br className="hidden sm:inline" />
              providers—fast.
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Find barbers, tutors, mechanics, and more. Search → Book → Pay securely.
            </p>

            {/* Search Form */}
            <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                {/* Service Input */}
                <div className="flex items-center space-x-2 border border-gray-200 rounded-lg py-3 px-4 flex-grow">
                  <FaSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="What do you need? (e.g., 'haircut')"
                    className="w-full focus:outline-none placeholder-gray-400 text-sm"
                  />
                </div>

                {/* Location Input */}
                <div className="flex items-center space-x-2 border border-gray-200 rounded-lg py-3 px-4 flex-grow">
                  <FaMapMarkerAlt className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="City or area"
                    className="w-full focus:outline-none placeholder-gray-400 text-sm"
                  />
                  <button className="text-orange-500 text-xs font-semibold whitespace-nowrap">
                    Use my location
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-4">
                {/* Date Picker */}
                <div className="flex items-center space-x-2 border border-gray-200 rounded-lg py-3 px-4 flex-grow">
                  <FaCalendarAlt className="text-gray-400" />
                  <input
                    type="date"
                    className="w-full focus:outline-none text-sm text-gray-600"
                  />
                </div>

                {/* Time Dropdown */}
                <div className="flex items-center space-x-2 border border-gray-200 rounded-lg py-3 px-4 flex-grow relative">
                  <FaClock className="text-gray-400" />
                  <select className="appearance-none w-full bg-transparent focus:outline-none text-gray-600 text-sm">
                    <option>Anytime</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                    <option>Night</option>
                  </select>
                </div>
              </div>

              <button className="w-full mt-4 bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Find providers
              </button>
              <p className="mt-4 text-xs text-gray-500 text-center">
                No phone calls. Instant confirmation after payment.
              </p>
            </div>
          </div>

          {/* Right Images */}
          <div className="w-full lg:w-fit flex justify-center items-center">
           <div className="grid grid-cols-2 grid-rows-8 gap-4 max-w-[500px] mx-auto w-fit">
  {/* Left side - spans rows 1 to 4 */}
  <div className="bg-white rounded-3xl shadow-xl row-span-3 row-start-1">
    <img
      src={assets.barber}
      alt="A barber cutting a client's hair"
      className="rounded-2xl aspect-square object-cover"
    />
  </div>
  <div className="bg-white rounded-3xl shadow-xl row-span-3 row-start-4">
    <img
      src={assets.tutor}
      alt="A tutor helping a student"
      className="rounded-2xl aspect-square object-cover"
    />
  </div>

  {/* Right side - spans rows 2 to 5 */}
  <div className="bg-white rounded-3xl shadow-xl row-span-3 row-start-2">
    <img
      src={assets.mechanic}
      alt="A mechanic working on a car engine"
      className="rounded-2xl aspect-square object-cover"
    />
  </div>
  <div className="bg-white rounded-3xl shadow-xl row-span-3 row-start-5">
    <img
      src={assets.electrician}
      alt="An electrician working on wiring"
      className="rounded-2xl aspect-square object-cover"
    />
  </div>
</div>

          </div>
        </div>

        {/* Bottom features */}
        <div className="flex flex-wrap justify-center mt-12 gap-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <FaLock className="text-green-500" />
            <span>Secure payments</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500" />
            <span>Verified providers</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock className="text-pink-500" />
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
