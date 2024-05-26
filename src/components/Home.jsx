import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import ProductDetails from "./ProductDetails";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <ProductDetails />
      <Footer />
    </>
  );
};

export default Home;
