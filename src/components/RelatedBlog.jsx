import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const RelatedBlog = ({blog}) => {
  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

    {blog.map((post, index) => (
        <Link
            href={`/blog/${post.slug}`}
            className="flex justify-between items-center cursor-pointer h-full mt-2">

            <div key={index} className="w-full  bg-white overflow-hidden">

                <div className="w-full h-60 relative overflow-hidden cursor-pointer">
                    <Image
                        src={post.image}
                        alt="Blog Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-95"
                    />
                </div>

                <div className="w-full py-4 flex justify-start items-start">
                    <h2 className="text-md font-semibold text-base text-gray-900 mb-2 para-limitaion">{post.title}</h2>
                </div>
            </div>
        </Link>
    ))}
</div>
  )
}

export default RelatedBlog