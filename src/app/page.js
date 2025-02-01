import Banner from "@/components/Banner";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
const Home = () => {
  return (
    <div className="w-full relative">
      <Navbar />
      <Banner />
      <div className="w-full py-4 sm:py-8">
        <Category/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
