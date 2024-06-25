import React from "react";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";

import Image from "next/image";

const RoomGallery = () => {
  const roomgallery = [
    {
      image: gallery1,
    },
    {
      image: gallery2,
    },
  ];

  return (
    <>
     <section className="inner-gallery-sec">
        <div className="container-80 no-gutters">
      <div className="row align-items-center">
        {roomgallery.map((room) => {
          return (
            <div className="col-lg-3">
              <div className="about-img">
                <Image src={room.image} width="215px" height="215px" />
              </div>
            </div>
          );
        })}
      </div>
      </div>
      </section>
    </>
  );
};
export default RoomGallery;
