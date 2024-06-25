import React from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Bannerinner from "../../Components/Aboutus/Bannerinner";
import Privacyinner from "../../Components/Privacy-Policy/Privacyinner";

const about = () => {
  return (
    <>
      <Header />
      <Bannerinner title="Privacy Policy"/>
      <Privacyinner/>
      <Footer />
    </>
  );
};
export default about;
