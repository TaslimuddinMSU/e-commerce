import React from 'react';
const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 w-64 h-screen bg-white shadow overflow-y-auto">
            <div className="text-xl font-bold text-green-500 mb-10 px-4 py-3">Organic Food</div>
            <ul className="space-y-4 px-5 mt-10 text-gray-700">
                <li className="hover:text-black transition-colors cursor-pointer">Tables</li>
                <li className="hover:text-black transition-colors cursor-pointer">Forms</li>
                <li className="hover:text-black transition-colors cursor-pointer">Icons</li>
                <li className="hover:text-black transition-colors cursor-pointer">Widgets</li>
                <li className="hover:text-black transition-colors cursor-pointer">Charts</li>
                <li className="hover:text-black transition-colors cursor-pointer">Maps</li>
                <li className="hover:text-black transition-colors cursor-pointer">Pages</li>
            </ul>

        </div>
    );
};

export default Sidebar;
