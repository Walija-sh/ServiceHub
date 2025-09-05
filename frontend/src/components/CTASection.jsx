import React from 'react'

const CTASection = () => {
 return (
    <section className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-16 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to find a trusted service near you?
        </h2>
        <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Join ServiceHub Today
        </button>
      </div>
    </section>
  );
}

export default CTASection