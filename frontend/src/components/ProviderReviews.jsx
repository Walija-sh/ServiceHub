import React from 'react'
import { FaStar  } from "react-icons/fa";

const ProviderReviews = ({ reviews }) => (
  <div>
    <h3 className="text-lg font-semibold mb-3">Reviews</h3>
    {reviews.map((review, i) => (
      <div key={i} className="border-b pb-3 mb-3">
        <p className="flex items-center text-yellow-500">
          {Array.from({ length: review.rating }).map((_, idx) => (
            <FaStar key={idx} />
          ))}
        </p>
        <p className="text-sm text-gray-600">{review.comment}</p>
        <p className="text-xs text-gray-400">- {review.user}</p>
      </div>
    ))}
  </div>
);

export default ProviderReviews