import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#fdead3] overflow-hidden">
      <Navbar/>
      <Introduction/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}
