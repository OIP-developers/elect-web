import React from "react";
import Image from "next/image";
import destination from "../../assets/3.png";

const Destinationwedding = () => {
  return (
    <>
      <section className="about-sec">
        <div className="container-80 no-gutters">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="assets/about.png" alt="" />
                <Image src={destination} width="600px" height="100%" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2 className="color-green">Destination Weddings</h2>
                <p className="fa-20">
                  You may have had many different visions of what your wedding
                  day would be like, but no matter where you envisioned your
                  destination wedding to be, your romance specialist with KT
                  Travel & More LLC will make your wedding dreams a reality!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Destinationwedding;
