"use client";
import React, { useState } from "react";

const CategoryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit?.(formData);
    onClose(); // close modal after submit
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl text-gray-600 hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-lg font-bold mb-4">Add Category</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Category Name"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            accept="image/*"
            required
          />
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

export default CategoryModal;
