import React, { useEffect, useRef } from "react";
// import wedvideo from '../public/wedding.mp4'

const Passion = () => {

// const video = URL.createObjectURL(wedVideo);
  return (
    <section className="passion">
      <div className="container-80">
        <div className="passion-content">
          <h2>Our Passion Is Your Dream Ride</h2>
          <p className="fa-24">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard
          </p>
        </div>
      </div>
      <div className="passion-bg-video">
        <video autoPlay loop  style={{ width: "100%", height: "100%" }} muted>
          <source src="./car.mp4" type="video/mp4" />
        </video>
         

       
      </div>
    </section>
  );
};

export default Passion;
