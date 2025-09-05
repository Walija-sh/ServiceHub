import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import Header from "./Header";

const faqs = [
  { q: "How do I book a provider?", a: "Simply browse services, choose a provider, and book instantly." },
  { q: "Can I reschedule or cancel?", a: "Yes, you can reschedule or cancel from your account dashboard." },
  { q: "When is my booking confirmed?", a: "You’ll receive an instant confirmation email once booked." },
  { q: "How do payments and refunds work?", a: "Payments are processed securely, and refunds follow our policy." },
  { q: "How are providers verified?", a: "All providers go through an ID and skill verification process." },
  { q: "Do I need an account to book?", a: "Yes, creating a free account is required to book services." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
         <Header text="Frequently Asked Questions" />
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="shadow-sm rounded-lg">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex  rounded-lg justify-between items-center w-full px-4 py-3 text-left font-medium hover:bg-gray-50"
            >
              {faq.q}
              <IoChevronDown
                className={`transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === i && (
              <div className="px-4 pb-3 text-gray-600">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
