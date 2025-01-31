'use client';
import { useState } from 'react';
import { Menu, X, Search, User, Bookmark, ShoppingCart } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
            {/* Logo and Menu Icon */}
            <div className="flex items-center gap-4">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <span className="text-xl font-bold flex items-center gap-2">
                    <span className="text-green-500">🌿</span> Organic
                </span>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-grow max-w-xl border rounded-lg overflow-hidden">
                <select className="bg-gray-100 p-3 border-r outline-none">
                    <option>All Categories</option>
                </select>
                <input
                    type="text"
                    placeholder="Search for more than 20,000 products"
                    className="flex-grow p-4 outline-none"
                />
                <button className="px-3 bg-green-500 text-white">
                    <Search size={20} />
                </button>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
                <User size={24} />
                <Bookmark size={24} />
                <ShoppingCart size={24} />
            </div>

            {/* Mobile Sidebar */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsMenuOpen(false)}></div>
            )}
            <div
                className={`fixed left-0 top-0 h-full bg-white w-64 shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform lg:hidden`}
            >
                <button onClick={() => setIsMenuOpen(false)} className="p-4 flex justify-end">
                    <X size={24} />
                </button>
                <ul className="p-4 space-y-3">
                    {['Fruits and Vegetables', 'Dairy and Eggs', 'Meat and Poultry', 'Seafood', 'Bakery and Bread', 'Canned Goods', 'Frozen Foods', 'Pasta and Rice', 'Breakfast Foods', 'Snacks and Chips'].map((item) => (
                        <li key={item} className="text-gray-700 hover:text-green-500 cursor-pointer">{item}</li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
