"use client";
import React, { useState } from "react";

const ProductModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
    rating: "",
    reviews: "",
    originalPrice: "",
    discountedPrice: "",
    discount: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    onClose(); // close modal after submit
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
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="text-sm w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            className="text-sm w-full border px-3 py-2 rounded"
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="text-sm w-full border px-3 py-2 rounded"
            />
            <input
              type="number"
              name="rating"
              placeholder="Rating (e.g. 5)"
              min="1"
              max="5"
              value={formData.rating}
              onChange={handleChange}
              className="text-sm w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              name="reviews"
              placeholder="Number of Reviews"
              value={formData.reviews}
              onChange={handleChange}
              className="text-sm w-full border px-3 py-2 rounded"
              required
            />
            <input
              type="number"
              name="originalPrice"
              placeholder="Original Price"
              value={formData.originalPrice}
              onChange={handleChange}
              className="text-sm w-full border px-3 py-2 rounded"
              step="0.01"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              name="discountedPrice"
              placeholder="Discounted Price"
              value={formData.discountedPrice}
              onChange={handleChange}
              className="text-sm w-full border px-3 py-2 rounded"
              step="0.01"
              required
            />
            <input
              type="text"
              name="discount"
              placeholder="Discount (e.g. 10% OFF)"
              value={formData.discount}
              onChange={handleChange}
              className="text-sm w-full border px-3 py-2 rounded"
              required
            />
          </div>
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

export default ProductModal;
