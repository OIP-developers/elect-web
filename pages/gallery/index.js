import React from "react";
import Gallery from "../../Components/Gallery/Gallery";
import Header from "../../Components/Header";
import Bannerinner from "../../Components/Aboutus/Bannerinner";
import Footer from "../../Components/Footer";

const Gallerys = () => {
  return (
    <>
      <Header />
      <Bannerinner title="Gallery" />
      <Gallery />
      <Footer />
    </>
  );
};

export default Gallerys;
