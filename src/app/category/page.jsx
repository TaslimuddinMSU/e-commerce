import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import CategoryCard from '@/components/CategoryCard';

const page = () => {
  return (
    <>
      <div className='w-full'>
        <Navbar />
      </div>

      <div className='w-full px-3 sm:px-6 py-6 sm:py-8'>
        <div className='flex justify-between items-center mb-4'>
          <Title title={'Types of category'} />
        </div>
        <CategoryCard />
      </div>

      <div className='w-full'>
        <Footer />
      </div>
    </>
  )
}

export default page