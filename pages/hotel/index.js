import React from "react";
import { useRouter } from "next/navigation";
import Bannerinner from "../../Components/Aboutus/Bannerinner";

import Header from "../../Components/Header";

import Footer from "../../Components/Footer";

const hotels = [
  {
    id: "1",
    name: "Royal Taj Hotel",
    location: "Islamabad",
    noOfRooms: 3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "2",
    name: "Some Other Hotel",
    location: "Karachi",
    noOfRooms: 20,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
  },
  {
    id: "3",
    name: "Lat Qila Hotel",
    location: "Karachi",
    noOfRooms: 10,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
  },
];

const hotel = () => {
  const router = useRouter();

  function onClichHandler() {
    router.push("/event");
  }

  return (
    <>
      <Header />
      <Bannerinner title="Best Hotel Deals" />

      <div className="container-80">
        <div className="row">
          <div className="col-lg-4">
            <div className="form-group">
              <input
                type="text"
                placeholder="Email"
                id="name"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4" />
          <div className="col-lg-4">
            <div className="form-group">
              <input
                type="text"
                placeholder="Email"
                id="name"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="row gy-3 align-items-center">
          {hotels.map((hotel) => (
            <div
              className="col-lg-12 card"
              key={hotel.id}
              onClick={onClichHandler}
            >
              <div className="card-body">
                <h3>{hotel.name}</h3>
                <p>Occupency: {hotel.noOfRooms}</p>
                <p>Location: {hotel.location}</p>

                <p>{hotel.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default hotel;
