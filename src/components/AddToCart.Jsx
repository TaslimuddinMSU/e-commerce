'use client'
import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

const AddToCart = () => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex items-center">
            {/* Favorite Button */}
            <button className="flex items-center justify-center w-10 h-10 bg-red-50 border rounded-md hover:bg-gray-100">
                <Heart className="w-5 h-5" />
            </button>
            {/* Quantity Selector */}
            <div className="w-[50px] flex items-center border rounded-md">

                <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-2 text-center border-none focus:outline-none"
                />
            </div>

            {/* Add to Cart Button */}
            <button className="flex items-center px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
                Add to Cart
            </button>
        </div>
    );
};

export default AddToCart;
