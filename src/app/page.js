import Banner from "@/components/Banner";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OfferSecetion from "@/components/OfferSecetion";
import Image from "next/image";
import FeaturedProducts from '@/components/FeaturedProducts'
import Blog from "@/components/Blog";

const Home = () => {
  return (
    <div className="w-full relative">
      <Navbar />
      <Banner />

      <div className="w-full py-4 sm:py-8">
        <Category />
      </div>

      {/* offer Section */}
      <div className="w-full">
        <OfferSecetion />
      </div>

      {/* Future Products */}

      <div className="w-full">
        <FeaturedProducts />
      </div>
      <div className="w-full py-4 sm:py-8 px-0 sm:px-5">
        <div className="w-full bg-newsLatterBanner bg-no-repeat bg-cover h-auto sm:h-[300px] flex items-center justify-center">
          <div className="container flex flex-col sm:flex-row gap-7 items-center justify-between px-4 sm:px-10">
            <div className="w-full sm:w-[50%] flex items-start justify-start flex-col">
              <p className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-white">Get 25% Discount on your first purchase</p>
              <p className="text-md text-white mt-2">Just Sign Up & Register it now to become member.</p>
            </div>
            <div className="w-full sm:w-[40%] flex items-center justify-center flex-col">
              <div className="mt-3 flex w-full">
                <input
                  type="name"
                  className="p-2 bg-white w-full"
                  placeholder="Enter your Name"
                  value=""
                />
              </div>
              <div className="mt-3 flex w-full">
                <input
                  type="email"
                  className="p-2 bg-white w-full"
                  placeholder="Email Address"
                  value=""
                />
              </div>
              <button className="p-2 bg-[#212529] mt-3 w-full text-white text-center">
                <span className="text-center">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="w-full">
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
