import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Bannerinner from "../../Components/Aboutus/Bannerinner";
import Destinationwedding from "../../Components/Destinationwedding/Destinationwedding";

const destinationwedding = () => {
  return (
    <>
      <Header />
      <Bannerinner title="Destination Wedding" />
      <Destinationwedding />
      <Footer />
    </>
  );
};

export default destinationwedding;
