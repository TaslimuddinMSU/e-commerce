import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
const Home = () => {
  return (
    <div className="w-full relative">
      <Navbar />
      <h2>Home page</h2>
      <Footer />
    </div>
  );
}

export default Home;
