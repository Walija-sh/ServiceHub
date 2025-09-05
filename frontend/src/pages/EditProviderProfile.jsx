import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaMoneyBill, FaClock, FaUpload, FaPlusCircle } from "react-icons/fa";

const EditProviderProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    about: "",
    phone: "",
    email: "",
    location: "",
    services: [
      { category: "", name: "", description: "", duration: "", price: "" },
    ],
    availability: {},
    profileImage: null,
    serviceImages: [],
  });

  // count filled fields for progress bar
  const totalFields = 12; // adjust based on required
  const filledFields = Object.values(formData).filter(v => (Array.isArray(v) ? v.length > 0 : v)).length;
  const progress = (filledFields / totalFields) * 100;

  const handleServiceAdd = () => {
    setFormData({
      ...formData,
      services: [...formData.services, { category: "", name: "", description: "", duration: "", price: "" }]
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-orange-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* BUSINESS INFO */}
      <section className="bg-white border border-gray-200 rounded-lg p-5 mb-6 shadow-sm">
        <h2 className="flex items-center text-lg font-semibold mb-4">
          <FaBriefcase className="text-orange-500 mr-2" /> Business Information
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input type="text" placeholder="Full Name"
              className="pl-10 w-full border border-gray-200 rounded-md p-2"
            />
          </div>
          <div className="relative">
            <FaBriefcase className="absolute left-3 top-3 text-gray-400" />
            <input type="text" placeholder="Profession"
              className="pl-10 w-full border border-gray-200 rounded-md p-2"
            />
          </div>
        </div>
        <textarea
          placeholder="About / Bio"
          className="w-full mt-4 border border-gray-200 rounded-md p-2"
        />
      </section>

      {/* CONTACT INFO */}
      <section className="bg-white border border-gray-200 rounded-lg p-5 mb-6 shadow-sm">
        <h2 className="flex items-center text-lg font-semibold mb-4">
          <FaPhone className="text-orange-500 mr-2" /> Contact & Location
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <FaPhone className="absolute left-3 top-3 text-gray-400" />
            <input type="text" placeholder="Phone Number" className="pl-10 w-full border border-gray-200 rounded-md p-2" />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input type="email" placeholder="Email" className="pl-10 w-full border border-gray-200 rounded-md p-2" />
          </div>
          <div className="relative col-span-2">
            <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
            <input type="text" placeholder="Business Address" className="pl-10 w-full border border-gray-200 rounded-md p-2" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white border border-gray-200 rounded-lg p-5 mb-6 shadow-sm">
        <h2 className="flex items-center text-lg font-semibold mb-4">
          <FaMoneyBill className="text-orange-500 mr-2" /> Services Offered
        </h2>
        {formData.services.map((service, idx) => (
          <div key={idx} className="border border-gray-200 rounded-md p-4 mb-4">
            <select className="w-full border border-gray-200 rounded-md p-2 mb-2">
              <option>Select Service Category</option>
              <option>Consultation</option>
              <option>Treatment</option>
              <option>Therapy</option>
            </select>
            <input type="text" placeholder="Service Name" className="w-full border border-gray-200 rounded-md p-2 mb-2" />
            <textarea placeholder="Service Description" className="w-full border border-gray-200 rounded-md p-2 mb-2" />
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Duration (e.g. 30 min)" className="w-full border border-gray-200 rounded-md p-2" />
              <input type="number" placeholder="Price (PKR)" className="w-full border border-gray-200 rounded-md p-2" />
            </div>
          </div>
        ))}
        <button onClick={handleServiceAdd} className="flex items-center text-orange-500 mt-2">
          <FaPlusCircle className="mr-1" /> Add Another Service
        </button>
      </section>

      {/* UPLOAD MEDIA */}
      <section className="bg-white border border-gray-200 rounded-lg p-5 mb-6 shadow-sm">
        <h2 className="flex items-center text-lg font-semibold mb-4">
          <FaUpload className="text-orange-500 mr-2" /> Upload Media
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">Upload Profile Photo</div>
          <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">Upload Service Images</div>
        </div>
      </section>

      {/* AVAILABILITY */}
      <section className="bg-white border border-gray-200 rounded-lg p-5 mb-6 shadow-sm">
        <h2 className="flex items-center text-lg font-semibold mb-4">
          <FaClock className="text-orange-500 mr-2" /> Availability
        </h2>
        <p className="text-sm text-gray-500 mb-2">Set your working hours</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(day => (
            <div key={day} className="flex flex-col border border-gray-200 rounded-md p-2">
              <span className="font-semibold">{day}</span>
              <input type="text" placeholder="9:00 AM - 5:00 PM" className="text-sm border border-gray-200 rounded-md p-1 mt-1" />
            </div>
          ))}
        </div>
      </section>

      {/* ACTIONS */}
      <div className="flex justify-between">
        <button className="border border-gray-300 rounded-md px-4 py-2">Save Draft</button>
        <button className="bg-orange-500 text-white rounded-md px-6 py-2">Complete Profile</button>
      </div>
    </div>
  );
};

export default EditProviderProfile;
