import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-orange-50 py-10 px-6 flex justify-center">
      <div className="bg-white p-6 text-center max-w-lg w-full">
        <h3 className="text-lg font-semibold mb-2">Get tips & offers</h3>
        
        <p className="text-gray-600 text-sm mb-4">
          Stay updated with the latest service providers and exclusive deals in your area.
        </p>
        <form className="flex flex-wrap gap-4 items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-2">We never share your email.</p>
      </div>
    </section>
  );
};

export default Newsletter;
