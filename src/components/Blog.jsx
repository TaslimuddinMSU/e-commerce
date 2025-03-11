import React from "react";
import Title from "./Title";
import { blog } from "@/utils/blog";
import BlogCard from "./BlogCard";
import Link from "next/link";

const Blog = () => {
    return (
        <div className="px-3 sm:px-6 py-2 sm:py-8">
            <div className="flex justify-between items-center gap-3 w-full">
                <Title title={"Our Recent Blog"} />
                <Link href="/blog" className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                    View More
                </Link>
            </div>
            <BlogCard blog={blog}/>
        </div>
    );
};

export default Blog;
