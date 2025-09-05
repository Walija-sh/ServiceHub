// OurStory.jsx
import { FaUsers } from "react-icons/fa";
import assets from "../assets/assets";

const OurStory = () => {
return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold flex justify-center items-center gap-2">
          <FaUsers className="text-orange-500" /> Our Story
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">Who We Are</h3>
            <p>
              ServiceHub is a platform built to help individuals and small
              service providers grow by making bookings simple and accessible.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">What We Solve</h3>
            <p>
              We eliminate missed calls, double bookings, and disorganized
              payments that plague traditional service booking.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={assets.ourStory}
            alt="Our Story"
            className="w-full max-w-sm"
          />
        </div>
      </div>

      <div className="bg-orange-50 text-center mt-12 py-6 px-6 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Our Mission</h3>
        <p className="text-gray-700">
          Our mission is to empower local providers and make services more
          accessible for everyone.
        </p>
      </div>
    </section>
  );
}

export default OurStory