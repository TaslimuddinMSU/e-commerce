"use client";
import React, { useState } from "react";

const CommentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    email: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted comment:", formData);

    setFormData({
      name: "",
      comment: "",
      email: "",
      website: "",
    });

    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Your Website"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Write your comment..."
            rows="4"
            className="w-full border px-3 py-2 rounded"
            required
          ></textarea>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
