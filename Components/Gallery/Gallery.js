import React, { useState } from "react";

import HotelGallery from "./HotelGallery";
import AllGallery from "./AllGallery";
import ActivityGallery from "./ActivityGallery";
import ResGallery from "./ResturantGallery";
import RoomGallery from "./RoomGallery";
const Gallery = () => {
  const [tab, setTab] = useState("all");
  const renderTabs = () => {
    switch (tab) {
      case "HotelGallery":
        return <HotelGallery />;
        break;
      case "all":
        return <AllGallery />;
        break;
      case "ActivityGallery":
        return <ActivityGallery />;
        break;
      case "ResturantGallery":
        return <ResGallery />;
        break;
      case "RoomGallery":
        return <RoomGallery />;
        break;
    }
  };

  return (
    <>
      <section className="gallery-sec">
        <div className="container-80 no-gutters">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <button
                onClick={() => {
                  setTab("all");
                }}
              >
                all
              </button>
              <button
                onClick={() => {
                  setTab("HotelGallery");
                }}
              >
                HotelGallery
              </button>
              <button
                onClick={() => {
                  setTab("ActivityGallery");
                }}
              >
                ActivityGallery
              </button>
              <button
                onClick={() => {
                  setTab("ResturantGallery");
                }}
              >
                ResturantGallery
              </button>
              <button
                onClick={() => {
                  setTab("RoomGallery");
                }}
              >
                RoomGallery
              </button>
            </div>
          </div>
        </div>
      </section>
      {renderTabs()}
    </>
  );
};
export default Gallery;
