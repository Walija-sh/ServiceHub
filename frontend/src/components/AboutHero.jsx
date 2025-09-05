import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import assets from '../assets/assets';

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        {/* Left: Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Connecting You with <br /> Trusted Local Services
          </h1>
          <p className="text-lg md:text-xl">
            At ServiceHub, we make it simple to find, book, and pay for local
            services you can rely on.
          </p>
          <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition">
            Get Started <FaArrowRight />
          </button>
        </div>

        {/* Right: Illustration */}
        <div className="flex justify-center">
          <img
            src={assets.aboutHero}
            alt="Connecting services"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutHero