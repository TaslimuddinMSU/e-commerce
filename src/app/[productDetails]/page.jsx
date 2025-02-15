'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { products } from "@/utils/Data";
import { useParams } from 'next/navigation';
import { FaShoppingCart, FaTruck } from 'react-icons/fa';
import Title from "@/components/Title";
import Products from "@/components/Products";
import DeliveryOptions from "@/components/DeliveryOptions";

const ProductPage = () => {
  const params = useParams();
  const { productDetails } = params;
  const id = Number(productDetails);

  const [prodDetails, setProdDetails] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    const item = products.find((ele) => ele.id === id);
    if (item) {
      setProdDetails(item);
      setSelectedImage(item.image);
    }
  }, [id]);

  return (
    <>
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full mx-auto p-4 md:p-8">
        {prodDetails ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image Section */}
            <div className="">
              <div className="border p-2">
                <Image
                  src={selectedImage}
                  alt={prodDetails.name}
                  width={600}
                  height={200}
                  className="rounded-md"
                />
              </div>
            </div>

            {/* Product Details Section */}
            <div>
              <h1 className="text-2xl font-bold">{prodDetails.name}</h1>
              <p className="text-gray-600">{prodDetails.description}</p>
              <div className="mt-2 flex items-center">
                <span className="text-lg font-semibold text-green-600">
                  {prodDetails.discount}
                </span>
              </div>
              <p className="text-xl font-bold mt-2 text-gray-900">
                ₹{prodDetails.discountedPrice}{" "}
                <span className="text-gray-500 line-through">
                  ₹{prodDetails.originalPrice}
                </span>
              </p>

              {/* Buttons */}
              <div className="mt-6 flex gap-4 flex-wrap">
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <button className="flex gap-2 items-center justify-center border px-4 sm:px-4 sm:py-2 rounded-md hover:bg-gray-100">
                    <span className="font-semibold text-lg">-</span>
                  </button>
                  <span className="text-gray-600 text-base">1</span>
                  <button className="flex gap-2 items-center justify-center border px-4 sm:px-4 sm:py-2 rounded-md hover:bg-gray-100">
                    <span className="font-semibold text-lg">+</span>
                  </button>
                </div>
                <button className="flex gap-2 items-center justify-center border px-5 py-2 rounded-md hover:bg-gray-100">
                  <span><FaShoppingCart /></span><span className="text-sm">Add to Cart</span>
                </button>
                <button className="w-full sm:w-[auto] text-sm bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600">
                  Buy Now
                </button>
              </div>
              <div className="w-full">
                <DeliveryOptions />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading product details...</p>
        )}
      </div>
      <div className="w-full p-4">
        <Title title={"Similar Products"} />
        <Products products={products} />
      </div>
      <div className="w-full py-2">
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
