import { FaStar , FaMapMarkerAlt } from "react-icons/fa";
// HEADER
const ProviderHeader = ({ provider }) => (
  <div className="flex flex-col md:flex-row items-start gap-4">
    <img
      src={provider.image}
      alt={provider.name}
      className="w-20 h-20 rounded-full"
    />
    <div className="flex-1">
      <h2 className="text-2xl font-bold">{provider.name}</h2>
      <p className="text-sm text-gray-500">{provider.profession}</p>
      <p className="flex items-center text-gray-400 text-sm">
        <FaMapMarkerAlt className="mr-1" /> {provider.location}
      </p>
      <p className="flex items-center text-yellow-500 text-sm">
        <FaStar className="mr-1" /> {provider.rating} ({provider.reviews.length} reviews)
      </p>
      <p className="mt-2 text-gray-600">{provider.description}</p>
    </div>
    <div className="flex flex-col gap-2">
      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow">
        Book Appointment
      </button>
      <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg">
        Save Provider
      </button>
    </div>
  </div>
);

export default ProviderHeader