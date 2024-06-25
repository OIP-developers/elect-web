import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import Bannerinner from "../../Components/Aboutus/Bannerinner";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Image from "next/image";
import toast from "react-hot-toast";
import Modal from "react-modal";
Modal.setAppElement("#__next");

const Event = () => {
  const router = useRouter();
  const [eventsData, setEventsData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchEvents = async () => {
      try {
        const response = await Axios.get(
          "https://custom.webprojectmockup.com/Kt_travels_backend/public/api/event_get"
        );
        setEventsData(response.data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    // Call the fetchEvents function when the component mounts
    fetchEvents();
  }, []);

  const onEventClickHandler = (eventID) => {
    router.push(`/event/${eventID}`);
  };

  const handleSearch = async () => {
    try {
      const response = await Axios.get(
        `https://custom.webprojectmockup.com/Kt_travels_backend/public/api/get_event_by_code/${searchInput}`
      );
      setSearchResults(response.data.data ? response.data.data : []);
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Check your code Again");
      setSearchResults([]);
    }
  };

  const eventsToDisplay = searchResults.length > 0 ? searchResults : eventsData;

  return (
    <>
      <Header />
      <Bannerinner title="Events" />
      <div className="container-80">
      <div className="search-box mt-3">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by event code..."
            className="event-search"
          />
          <button onClick={handleSearch} className="main-btn">Search</button>
        </div>
        <div className="event row">
          {eventsToDisplay.length > 0 ? (
            eventsToDisplay.map((event) => (
              <div className="col-lg-4 mt-5 card" key={event?.id}>
                <div className="row card-body">
                  <div className="col-lg-12">
                    <Image
                      src={event?.cover_image}
                      width={1000}
                      height={100}
                      onClick={() => onEventClickHandler(event?.id)}
                    />
                  </div>
                  <div className="col-lg-12 text-left py-4">
                    <h2 style={{ textAlign: "center" }}>
                      Name: {event?.event_name}
                    </h2>
                    <h5 style={{ textAlign: "center" }}>
                      Code: {event?.event_code ? event?.event_code : "N/A"}
                    </h5>
                    <h5 style={{ textAlign: "center" }}>
                      Date: {event?.check_in} - {event?.check_out}
                    </h5>
                    <h5 style={{ textAlign: "center" }}>
                      Location: {event?.hotel?.hotel_name}
                    </h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No result found</p>
          )}
        </div>
      </div>
      <Footer />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Search Events Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <div className="row modal-top-row">
          <h2>Search Events</h2>
          </div>
     <div className="row modal-row">
      <div className="col-lg-12">
    
      <p> Search event you are invented by using Event Code</p>
          <div className="search-box ">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by event code..."
            className="event-search"
          />
          <button onClick={handleSearch} className="main-btn">Search</button>
         
        </div>
        <p>If you are already registered kindly <a href="https://kt-travels-dashboard-upja.vercel.app/login/" target="_blank">login</a></p>
      </div>
    
     </div>
        </div>
      </Modal>
    </>
  );
};

export default Event;
