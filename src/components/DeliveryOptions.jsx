import { useState } from "react";
import { FaTruck, FaCheck } from "react-icons/fa";

const DeliveryOptions = () => {
    const [pincode, setPincode] = useState("");

    return (
        <div className="py-4  w-full max-w-md">
            <h3 className="font-bold flex items-center gap-2 text-lg">
                DELIVERY OPTIONS <FaTruck />
            </h3>
            <div className="mt-2 flex items-center border rounded-md overflow-hidden">
                <input
                    type="text"
                    className="p-2 flex-grow outline-none"
                    placeholder="Enter pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                />
                <button className="bg-red-500 text-white px-4 py-2 font-semibold">
                    Check
                </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">
                Please enter PIN code to check delivery time & Pay on Delivery Availability
            </p>
            <ul className="mt-3 text-sm ">
                <li className="flex items-center justify-start mb-2 gap-2 ">
                    <div className="bg-green-600 p-1  text-white rounded-md w-7 font-semibold flex items-center justify-center">
                        <FaCheck />
                    </div> <span>100% Original Products</span>
                </li>
                <li className="flex items-center justify-start mb-2 gap-2">
                    <div className="bg-green-600 p-1 text-white rounded-md w-7 font-semibold flex items-center justify-center">
                        <FaCheck />
                    </div> <span>Pay on delivery might be available</span>
                </li>
                <li className="flex items-center justify-start mb-2 gap-2">
                    <div className="bg-green-600 p-1 text-white rounded-md w-7 font-semibold flex items-center justify-center">
                        <FaCheck />
                    </div> <span>Easy 7 days returns and exchanges</span>
                </li>
            </ul>
        </div>
    );
}

export default DeliveryOptions;
