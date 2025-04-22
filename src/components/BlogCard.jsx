import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Tag } from "lucide-react"; 

const BlogCard = ({blog}) => {
    return (
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">

            {blog.map((post, index) => (
                <Link
                    href={`/blog/${post.slug}`}
                    className="flex justify-center items-center cursor-pointer h-full ">

                    <div key={index} className="max-w-lg bg-white rounded-xl shadow-lg overflow-hidden">

                        <div className="w-full h-60 relative overflow-hidden cursor-pointer">
                            <Image
                                src={post.image}
                                alt="Blog Image"
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 ease-in-out group-hover:scale-95"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex items-center space-x-4 text-gray-500 text-sm mb-3">
                                <div className="flex items-center">
                                    <CalendarDays size={16} className="mr-1" />
                                    {post.date}
                                </div>
                                <div className="flex items-center">
                                    <Tag size={16} className="mr-1" />
                                    {post.category}
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2 para-limitaion">{post.title}</h2>
                            <p className="text-gray-600 para-limitaion">{post.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default BlogCard