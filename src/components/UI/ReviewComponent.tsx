"use client";
import React from 'react';
import { FaStar, FaThumbsUp, FaThumbsDown, FaReply } from 'react-icons/fa';

const reviews = [
  {
    name: 'Dennis',
    time: 'a week ago',
    avatar: '/assets/avatar-02.jpg',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    name: 'Jaime',
    time: 'yesterday | 10:35AM',
    avatar: '/assets/avatar-03.jpg',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }
];

const ReviewComponent = () => {
  return (
    <div className="mt-8">
      <h5 className="text-2xl font-semibold mb-4">Reviews</h5>
      <ul className="space-y-6">
        {reviews.map((review, index) => (
          <li key={index} className="border p-4 rounded-lg shadow-sm">
            <div className="review-profile flex items-start mb-4">
              <div className="review-img flex-shrink-0">
                <img src={review.avatar} className="img-fluid rounded-full w-12 h-12" alt="img" />
              </div>
              <div className="review-name ml-4">
                <h6 className="text-lg font-semibold">{review.name}</h6>
                <p className="text-sm text-gray-600">{review.time}</p>
              </div>
              <div className="ml-auto flex items-center mt-3">
                <div className="rating flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
               
              </div>
            </div>
            <p className="mb-4 text-gray-700">{review.comment}</p>
            <div className="flex justify-between items-center">
              <a href="#" className="flex items-center space-x-1 text-blue-600">
                <FaReply className="mr-1" />
                <span>Reply</span>
              </a>
              <div className="recommend-info flex items-center space-x-2">
                <p className="text-gray-700">Recommend?</p>
                <a href="#" className="flex items-center space-x-1 text-green-600">
                  <FaThumbsUp />
                  <span>Yes</span>
                </a>
                <a href="#" className="flex items-center space-x-1 text-red-600">
                  <FaThumbsDown />
                  <span>No</span>
                </a>
              </div>
            </div>
            {review.reply && (
              <div className="reply-area mt-4">
                <textarea
                  className="form-control w-full p-2 border rounded"
                  rows="3"
                  placeholder="Type your response..."
                ></textarea>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="text-center mt-6">
        <a href="customer-reviews.html" className="btn btn-primary btn-review bg-blue-500 text-white px-4 py-2 rounded">
          View All Reviews
        </a>
      </div>
    </div>
  );
};

export default ReviewComponent;
