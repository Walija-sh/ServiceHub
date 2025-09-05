// src/components/CustomerReviews.jsx
import { FaStar } from "react-icons/fa";
import Header from "./Header";

const reviews = [
  {
    name: "Sarah Ahmed",
    location: "Gulberg, Lahore",
    text: "Amazing experience! Booked a barber through the app and he was professional and punctual. The payment process was seamless.",
    tag: "Barber Service",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Ahmed Khan",
    location: "DHA, Karachi",
    text: "Found an excellent math tutor for my daughter. The booking process was so easy and the tutor was highly qualified.",
    tag: "Tutoring",
    avatar: "https://i.pravatar.cc/100?img=49",
  },
  {
    name: "Fatima Ali",
    location: "Johar Town, Lahore",
    text: "My AC broke down in summer heat. Found a technician within minutes and he fixed it the same day. Lifesaver!",
    tag: "AC Repair",
    avatar: "https://i.pravatar.cc/100?img=52",
  },
];

const CustomerReviews = () => {
  return (
    <div className="py-12 px-5 md:px-10 max-w-6xl  mx-auto">
         <Header text="What customers say" />
      
      <div className="grid md:grid-cols-3 gap-6 ">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            <p className="text-gray-700 text-sm mb-4">{review.text}</p>
            <span className="text-xs px-3 py-1 rounded-lg bg-orange-100 text-orange-600 font-medium">
              {review.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
