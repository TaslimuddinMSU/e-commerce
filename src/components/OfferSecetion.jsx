import React from 'react'

const OfferSecetion = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Left Banner */}
                <div className="relative bg-black text-white h-83 flex items-center justify-start p-6 shadow-md" 
                style={{ backgroundImage: "url('/banner-ad-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div>
                        <h2 className="text-4xl font-bold">Items on SALE</h2>
                        <p className="text-lg mt-2">Discounts up to 30%</p>
                        <button className="mt-4 px-6 py-2 bg-white text-black rounded-md shadow hover:bg-gray-100">
                            SHOP NOW
                        </button>
                    </div>
                </div>

                {/* Right Banners */}
                <div className="flex flex-col gap-4">
                    {/* Combo Offers */}
                    <div className="relative bg-blue-500 text-white h-40 flex items-center justify-start p-6 shadow-md" 
                    style={{ backgroundImage: "url('/banner-ad-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div>
                            <h2 className="text-2xl font-bold">Combo Offers</h2>
                            <p className="text-md mt-2">Discounts up to 50%</p>
                            <button className="mt-2 px-4 py-2 bg-white text-blue-500 rounded-md shadow hover:bg-gray-100">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                    {/* Discount Coupons */}
                    <div className="relative bg-green-500 text-white h-40 flex items-center justify-start p-6 shadow-md" 
                    style={{ backgroundImage: "url('/banner-ad-3.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div>
                            <h2 className="text-2xl font-bold">Discount Coupons</h2>
                            <p className="text-md mt-2">Discounts up to 40%</p>
                            <button className="mt-2 px-4 py-2 bg-white text-green-500 rounded-md shadow hover:bg-gray-100">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferSecetion