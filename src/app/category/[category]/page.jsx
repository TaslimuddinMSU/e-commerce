import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import React from 'react';
import { products } from '@/utils/Data';
import Title from '@/components/Title';

const Category = () => {
  return (
    <>
    <div className='w-full'>
        <Navbar />
    </div>

    <div className='w-full px-3 sm:px-6 pt-6 '>
        <Title title={"Bread"} />
    </div>

    <div className='w-full px-3 sm:px-6 my-4 sm:my-8'>
        <Products products= {products} />
    </div>
    <div className='w-full'>
        <Footer />
    </div>
    </>
  )
}

export default Category