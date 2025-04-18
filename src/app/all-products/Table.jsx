import React from 'react';

const Table = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-xl">
                            S. No.
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl">Product name</th>
                        <th scope="col" className="px-6 py-3 text-xl">Color</th>
                        <th scope="col" className="px-6 py-3 text-xl">Category</th>
                        <th scope="col" className="px-6 py-3 text-xl">Price</th>
                        <th scope="col" className="px-6 py-3 text-xl">Action</th>
                    </tr>
                </thead>
                {[
                    { id: 1, name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
                    { id: 2, name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
                    { id: 3, name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
                    { id: 4, name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
                    { id: 5, name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
                    { id: 6, name: 'Apple iMac 27"', color: 'Silver', category: 'PC Desktop', price: '$3999' },
                ].map((item, index) => (
                    <tbody key={item.id} className="mb-4 shadow-md rounded-lg bg-white dark:bg-gray-800">
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="w-8 p-4">{index + 1}</td>
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                {item.name}
                            </th>
                            <td className="px-6 py-4">{item.color}</td>
                            <td className="px-6 py-4">{item.category}</td>
                            <td className="px-6 py-4">{item.price}</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                ))}

            </table>

        </div>
    );
};

export default Table;
