import React from 'react'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import Products from "@/components/Products";

import { products } from "@/utils/Data";
const AllProducts = () => {
    return (
        <>
            <div className="w-full">
                <Navbar />
            </div>
            <div className="w-full p-4">
                <Title title={"Similar Products"} />
                <Products products={products} />
            </div>
            <div className="w-full py-2">
                <Footer />
            </div>
        </>
    )
}

export default AllProducts;