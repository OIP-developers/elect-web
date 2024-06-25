import React from "react";
import shashka from "../assets/shashka.png";
import engagmentImg from "../assets/1.jpg";
import destinationImg from "../assets/2.jpg";
import weddingImg from "../assets/3.png";
import honeymoonImg from "../assets/4.png";
import anniversaryImg from "../assets/5.png";
import travelImg from "../assets/6.png";
import Image from "next/image";

const Celebration = () => {
  const travel = [
    {
      image: engagmentImg,
      title: "Request a ride for now or later",
      description:
        "Now more than ever, reservations are a way of life. Reserve a premium Elect experience, up to 90 days in advance, for whenever you’re ready to ride.",
    },
    {
      image: destinationImg,
      title: "Reserve a ride that’s ready when you are",
      description:
        "Now more than ever, reservations are a way of life. Reserve a premium Elect experience, up to 90 days in advance, for whenever you’re ready to ride.",
    },
  
   
  ];
  return (
    <section className="celebration">
      <div className="container-80">
        <div className="headings-wrap text-center">
          <h2 className="color-green">Book Your Travel</h2>

          <Image className="shasky" src={shashka} width="390px" height="39px" />

          <p className="fa-24">
            Planning your  travels just got easier with Elect,
           
          </p>
        </div>
        <div className="travel-main-wrapper">
          {travel.map((travels) => {
            return (
              <div className="row">
                <div className="col-md-6">
                  <div className="travel-img">
                    {/* <img src="assets/1.png" alt="" /> */}
                    <Image src={travels.image} width="600px" height="297px" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="travel-content">
                    <h2 className="color-green">{travels.title}</h2>
                    <p className="fa-20">{travels.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Celebration;
