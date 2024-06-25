import React from "react";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import Image from "next/image";

const ResGallery = () => {
  const resgallery = [
    {
      image: gallery1,
    },
    {
      image: gallery2,
    },
    {
      image: gallery3,
    },
    {
      image: gallery4,
    },
  ];

  return (
    <>
     <section className="inner-gallery-sec">
        <div className="container-80 no-gutters">
      <div className="row align-items-center">
        {resgallery.map((resturant) => {
          return (
            <div className="col-lg-3">
              <div className="about-img">
                <Image src={resturant.image} width="215px" height="215px" />
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
export default ResGallery;
