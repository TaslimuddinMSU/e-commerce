"use client";
import React, { useState } from "react";

const BlogModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    title: "",
    slug: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit?.(formData);
    onClose(); // Optional: close after submit
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Add Blog</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label htmlFor="date" className="mb-1 font-bold text-sm text-gray-700">
                Date
              </label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Date"
                className="w-full border px-3 py-1 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="mb-1 font-bold text-sm text-gray-700">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                className="w-full border px-3 py-1 rounded"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full border px-3 py-1 rounded"
              required
            />
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="Slug"
              className="w-full border px-3 py-1 rounded"
              required
            />
          </div>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows="4"
            className="w-full border px-3 py-1 rounded"
            required
          ></textarea>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full border px-3 py-1 rounded"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogModal;
