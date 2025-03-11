import React from 'react'

const UserPost = () => {
  return (
    <div className="w-full py-4">
      <textarea className="small-text w-full h-40 border border-gray-300 rounded-md p-3 focus:outline-none 
      focus:ring-2 focus:ring-gray-400"
        placeholder="Write your comment..."></textarea>

      <div className="flex flex-wrap gap-3 mt-3">
        <input type="text" className="small-text w-full md:w-1/3 border border-gray-300 rounded-md p-2
          focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Name"
        />
        <input type="email" className="small-text w-full md:w-1/3 border border-gray-300 rounded-md 
          p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Email"
        />
        <input type="url" className="small-text w-full md:w-1/3 border border-gray-300 
          rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Website"
        />
      </div>

      <button className="small-text mt-4 px-6 py-2 bg-white border border-gray-400
       text-gray-700 rounded-md hover:bg-gray-100 transition">Post Comment
      </button>
    </div>

  )
}

export default UserPost