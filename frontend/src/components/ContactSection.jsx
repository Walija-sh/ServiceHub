import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactSection = () => {
 return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full border rounded-lg p-3" />
            <input type="email" placeholder="Email" className="w-full border rounded-lg p-3" />
            <input type="text" placeholder="Phone (Optional)" className="w-full border rounded-lg p-3" />
            <select className="w-full border rounded-lg p-3">
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Feedback</option>
            </select>
            <textarea placeholder="Message" rows="4" className="w-full border rounded-lg p-3"></textarea>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-orange-500"/> 123 Service Street, Your City</p>
          <p className="flex items-center gap-3"><FaEnvelope className="text-orange-500"/> support@servicehub.com</p>
          <p className="flex items-center gap-3"><FaPhone className="text-orange-500"/> +1 (555) 123-4567</p>
          <p className="flex items-center gap-3"><FaClock className="text-orange-500"/> Mon–Sat, 9 AM – 6 PM</p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection