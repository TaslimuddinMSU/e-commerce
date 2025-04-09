import React from 'react';
const Sidebar = () => {
    return (
        <div className="h-screen bg-white shadow overflow-y-auto">
            <div className="text-xl font-bold text-green-500 mb-10 px-5 py-6">Organic Food</div>
            <ul className="space-y-4 px-5 mt-18 text-gray-700">
                <li className="hover:text-black transition-colors cursor-pointer">Taaaaaaables</li>
                <li className="hover:text-black transition-colors cursor-pointer">Forms</li>
                <li className="hover:text-black transition-colors cursor-pointer">Icons</li>
                <li className="hover:text-black transition-colors cursor-pointer">aaaa Widgets</li>
                <li className="hover:text-black transition-colors cursor-pointer">Charts</li>
                <li className="hover:text-black transition-colors cursor-pointer">Maps</li>
                <li className="hover:text-black transition-colors cursor-pointer">Pages</li>
                
                <li className="hover:text-black transition-colors cursor-pointer">Pages</li>
            </ul>

        </div>
    );
};

export default Sidebar;
