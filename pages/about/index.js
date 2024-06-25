import React from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Bannerinner from "../../Components/Aboutus/Bannerinner";
import Aboutinner from "../../Components/Aboutus/Aboutinner";

const about = () => {
  return (
    <>
      <Header />
      <Bannerinner title="About US"/>
      <Aboutinner/>
      <Footer />
    </>
  );
};
export default about;
