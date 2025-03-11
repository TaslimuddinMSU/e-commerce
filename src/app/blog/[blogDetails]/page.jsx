import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import Image from 'next/image';
import { blog } from '@/utils/blog';
import RelatedBlog from '@/components/RelatedBlog';
import { relatedBlog } from "@/utils/blog";
import UserPost from '@/components/UserPost';

const BlogDetails = async ({ params }) => {
    const blogTitle = (await params?.blogDetails) || "Loading...";
    const formattedTitle = blogTitle
        .split("-") // Split by hyphens
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <>
            <div className='w-full'>
                <Navbar />
            </div>
            <div className='w-full py-6 px-4 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                <div className='flex justify-center items-center gap-4'>
                    <Title title={formattedTitle} />
                </div>
                <div className='w-full'>
                    <div className='w-full py-3 md:py-6 lg:py-8'>
                        <Image
                            src="/blog-img.webp"
                            alt={formattedTitle}
                            width={600} 
                            height={200} 
                            className="w-full h-auto object-cover rounded-lg" 
                        />
                    </div>

                    <h4 className='text-xl font-bold text-gray-900 py-4'>Why Budget-Friendly Fashion Matters?</h4>
                    <p className='py-3 leading-relaxed'>
                        Dressing your kids in stylish yet affordable clothing is essential for parents who want to balance fashion and finances.
                        With the right approach, you can find quality outfits without overspending.
                    </p>

                    <h4 className='text-xl font-bold text-gray-900 py-4'>Shop During Seasonal Sales</h4>
                    <p className='py-3 leading-relaxed'>
                        Dressing kids fashionably without overspending is a priority for many parents. Children grow quickly, making it essential to find
                        affordable yet stylish clothing that keeps them comfortable and trendy. With a little planning and creativity, you can build a budget-friendly wardrobe without compromising on quality.
                    </p>

                    <h4 className='text-xl font-bold text-gray-900 py-4'>Take Advantage of Discounts and Offers</h4>
                    <p className='py-3 leading-relaxed'>
                        One of the best ways to save money on kids' outfits is by shopping during seasonal sales and discounts.
                        Retailers offer major price reductions during back-to-school periods, festive seasons, and clearance sales.
                        Planning purchases around these sales can help parents stock up on essentials at a fraction of the cost.
                        Many online stores also provide exclusive discounts and cashback offers, making it even easier to save.
                    </p>

                    <h4 className='text-xl font-bold text-gray-900 py-4'>Choose Versatile Clothing</h4>
                    <p className='py-3 leading-relaxed'>
                        Another smart way to keep costs low is by choosing versatile clothing. Investing in neutral-colored tops,
                        comfortable jeans, and simple dresses allows for multiple outfit combinations. Layering pieces such as jackets,
                        cardigans, and leggings can also make outfits more adaptable across different seasons. By selecting practical
                        and interchangeable items, parents can create a functional yet stylish wardrobe.
                    </p>

                    <h4 className='text-xl font-bold text-gray-900 py-4'>Prioritize Comfort and Durability</h4>
                    <p className='py-3 leading-relaxed'>
                        Comfort and durability should always be a priority when buying kids' clothes. Since children are constantly
                        on the move, selecting soft and breathable fabrics like cotton ensures comfort throughout the day. Additionally,
                        durable fabrics help outfits withstand frequent washes and active play, reducing the need for constant replacements.
                    </p>


                    <h5 className=' text-gray-900 text-xl font-bold py-4'>Conclusion</h5>
                    <p className='py-3 leading-relaxed'>By shopping smartly, choosing versatile outfits, and exploring second-hand options, parents can keep their
                        kids looking stylish while staying within budget.
                    </p>

                    <h5 className=' text-gray-900 text-xl py-4 font-bold'>Related Posts:</h5>
                    <div className='w-full py-4'>
                        <RelatedBlog blog={relatedBlog} />
                    </div>

                    <div className='w-full'>
                        <h5 className=' text-gray-900 text-xl py-4 font-bold'>Leave a comment:</h5>
                        <p className='text-gray-600 small-text'>Your email address will not be published.</p>

                        <UserPost />
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </>
    );
};

export default BlogDetails;
