import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Celebration from "../Components/Celebration";
import Passion from "../Components/Passion";
import Room from "../Components/Room";
import Testimonial from "../Components/Testimonial";
import Newsletter from "../Components/Newsletter";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Celebration />
      <Passion />
      {/* <Room /> */}
      <Testimonial />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
