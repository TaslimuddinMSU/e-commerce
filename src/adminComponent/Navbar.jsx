import Image from 'next/image';
import React from 'react';
 
const Navbar = () => {
    return (
        <div className='fixed w-full flex justify-center items-center gap-4'>
            <div className='w-full flex justify-between items-center gap-4 px-5'>
                <div className='text-green-500 text-2xl font-bold '>Organic Foods</div>
                <div>
                    <div className='flex gap-2 justify-center items-center'>
                        <div className='text-xl font-bold'>Taslim</div>
                        <div className='flex j                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ustify-center items-center'>
                            <Image src={'/'} alt='' width={30} height={30} />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
