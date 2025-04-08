import React from 'react';
const Navbar = () => {
    return (
        <div className="fixed w-full top-0 left-64 right-0 h-16 bg-white shadow z-10 p-4">
            <div className="w-full flex items-center justify-between">
                <div>ABC</div>
                <div className="flex items-center justify-end">
                    <div className="flex justify-end items-center gap-3">
                        <p className="text-lg text-black font-bold">Taslim</p>
                        <div className="w-9 h-9 flex justify-center items-center rounded-lg bg-black overflow-hidden">
                            <img src="/user.jpg" className="w-8 h-8 rounded-full object-cover" alt="User" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
