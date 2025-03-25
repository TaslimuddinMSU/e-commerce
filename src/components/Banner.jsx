import React from 'react'
import { FaSyncAlt, FaLeaf, FaTruck } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className="relative w-full h-auto sm:h-auto  bg-bannerImg bg-cover bg-center">
            {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
            <div className="relative z-10 text-white flex flex-col p-8 gap-3">
                <h1 className="px-2 sm:px-3">
                    <span className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl text-green-500 font-bold">Organic </span>
                    <span className="text-[#212529]"><span className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl'>Food at <br /> your </span>
                        <span className='text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold'>Doorstep</span>
                    </span>
                </h1>
                <h3 className='px-2 sm:px-3 text-2xl pt-3 text-[#343a40]'>From Farm to Table, Delivered Right to You.</h3>
            </div>
            <div className="w-full flex gap-4 px-8 py-3">
                <button type='button' className="z-10 rounded-lg bg-[#6BB252] hover:bg-black px-4 py-2 sm:px-8 sm:py-3 text-white ">
                    Start Shopping
                </button>
                <button type='button' className="z-10 rounded-lg bg-[#343a40] hover:bg-[#343a40f4] px-4 py-2 sm:px-8 sm:py-3 text-white">
                    Join Now
                </button>
            </div>

            <div className="w-full text-left py:4 sm:py-8 hidden sm:block">
                <div className="px-7">
                    <div className="flex gap-6 flex-wrap">
                        <div className="flex gap-4 items-center">
                            <span className="text-3xl sm:text-5xl font-bold text-yellow-600">14k+</span>
                            <p className="text-lg text-white leading-2">Product <br />Varieties</p>
                        </div>

                        <div className="flex gap-4 items-center">
                            <span className="text-3xl sm:text-5xl font-bold text-yellow-600">50k+</span>
                            <p className="text-lg text-white leading-2">Happy <br />Customers</p>
                        </div>

                        <div className="flex gap-4 items-center">
                            <span className="text-3xl sm:text-5xl font-bold text-yellow-600">10+</span>
                            <p className="text-lg text-white leading-2">Store <br /> Locations</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 text-white px-0 sm:px-6">
                <div className="bg-green-500 p-6 flex items-center">
                    <FaSyncAlt className="text-4xl mr-4" size={60}/>
                    <div>
                        <h3 className="font-bold text-2xl">Fresh from farm</h3>
                        <p className='text-white text-lg'>Lorem ipsum dolor sit amet, consectetur adipis elit.</p>
                    </div>
                </div>
                <div className="bg-green-900 p-6 flex items-center">
                    <FaLeaf className="text-4xl mr-4" size={60}/>
                    <div>
                        <h3 className="font-bold text-2xl">100% Organic</h3>
                        <p className='text-white text-lg'>Lorem ipsum dolor sit amet, consectetur adipis elit.</p>
                    </div>
                </div>

                {/* Free Delivery */}
                <div className="bg-orange-500 p-6 flex items-center">
                    <FaTruck className="text-4xl mr-4" size={60}/>
                    <div>
                        <h3 className="font-bold text-2xl">Free delivery</h3>
                        <p className='text-white text-lg'>Lorem ipsum dolor sit amet, consectetur adipis elit.</p>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default Banner