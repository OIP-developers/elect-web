import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm, useFieldArray } from "react-hook-form";
import Axios from "axios";
import Bannerinner from "../../../Components/Aboutus/Bannerinner";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SingleEvent = () => {
  const router = useRouter();
  const { id } = router?.query;

  const [eventsData, setEventsData] = useState({});
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [obj,setObj] =useState({}) 
  const [roomObj,setRoomOBj] =useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      if (id) {
        try {
          const response = await Axios.get(
            `https://custom.webprojectmockup.com/Kt_travels_backend/public/api/event_get_by_id/${id}`
          );
          setEventsData(response.data.data);
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      }
    };

    fetchEvents();
  }, [id]);

  const { control, watch, register } = useForm({
    defaultValues: {
      rooms: [{ roomId: "", capacity: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "rooms",
  });

  const watchFields = watch("rooms");

  // useEffect(() => {
  //   const calculateTotalPrice = () => {
  //     let total = 0;
  //     watchFields.forEach((field) => {
  //       const room = eventsData.meta_data?.find((room) => room.id === field.roomId);
  //       if (room && checkInDate && checkOutDate) {
  //         const days = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
  //         const roomCapacity = room?.capacity.find((cap) => cap.id === field.capacity);
  //         const roomPrice = roomCapacity?.price || 0; // Default to 0 if price is not available
  //         total += roomPrice * days;
  //       }
  //     });
  //     setTotalPrice(total);
  //   };
  //   calculateTotalPrice();
  // }, [watchFields, checkInDate, checkOutDate]);

  const handleRoomChange = (index, event) => {
    const roomId = event.target.value;
    const selectedRoom = eventsData.meta_data?.find((room) => room.id === roomId);
    const updatedRooms = [...selectedRooms];
    updatedRooms[index] = selectedRoom;

    setObj((obj)=>{
      return {
        ...obj,
        room_id : selectedRoom.id,
      }
    });
    setSelectedRooms(updatedRooms);
  };

  const handleRoomChange1 = (index, event) => {
    // Get the selected option
    const selectedOption = event.target.options[event.target.selectedIndex];
    // Get the value of the data-price attribute
    const price = selectedOption.getAttribute("data-price");
    const id = selectedOption.getAttribute("data-id");


    // Get all elements with class .capacitySelection
    const capacitySelects = document.querySelectorAll(`.capacitySelection`);
    let totalCapacityPrice = 0;

    // Iterate over each capacitySelect and accumulate prices
    capacitySelects.forEach((capacitySelect) => {
      const selectedCapacityOption = capacitySelect.options[capacitySelect.selectedIndex];
      const capacityPrice = parseFloat(selectedCapacityOption.getAttribute('data-price') || 0);
      totalCapacityPrice += capacityPrice;
    });
    const days = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
    console.log(selectedOption);
    setTotalPrice(totalCapacityPrice * days);

    setObj((obj)=>{
      return {
        ...obj,
        capacity_id:id
      }
    });
    // Now totalCapacityPrice contains the sum of all capacity prices

  };

  const onProceedCheckoutHandler = () => {
    localStorage.setItem("price", totalPrice)
    localStorage.setItem("terms and condition", eventsData?.terms_and_conditions)
    localStorage.setItem("Selected Rooms",JSON.stringify(roomObj))
    localStorage.setItem("eventId",eventsData?.id)
    router.push("/checkout");
  };


  console.log(eventsData, "eventss" )
  
  console.log(obj, roomObj);

  return (
    <>
      <Header />
      <Bannerinner title={eventsData?.event_name} />
      <div className="container-80">
        <h3>{eventsData?.event_name}</h3>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <label className="col-lg-3">Event Name</label>
              <p className="col-lg-7 fw-bold">{eventsData?.event_name}</p>
            </div>
            {/* <div className="row items-center">
              <div className="col-lg-6 row items-center">
                <div className="col-lg-5">Event Date From</div>
                <div className="col-lg-7">
                  <p className="col-lg-7 fw-bold">{eventsData?.check_in}</p>
                </div>
              </div>
              <div className="col-lg-6 row items-center">
                <div className="col-lg-3">To</div>
                <div className="col-lg-9">
                  <p className="col-lg-7 fw-bold">{eventsData?.check_out}</p>
                </div>
              </div>
            </div> */}
            <div className="row mt-2">
              <label className="col-lg-3">Event Venue</label>
              <p className="col-lg-7 fw-bold">{eventsData?.hotel?.hotel_name}</p>
            </div>
            <div className="row">
              <label className="col-lg-3">Event location</label>
              <p className="col-lg-7 fw-bold">{eventsData?.hotel?.hotel_location}</p>
            </div>
          </div>
        </div>

        <h2 className="text-center mt-3">Start Booking Now</h2>
        <div className="date-selection-section mt-5">
          <div className="row">
            <div className="col-md-6">
              <label>Check-In Date</label>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={new Date(eventsData.check_in)}
                maxDate={new Date(eventsData.check_out)}
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label>Check-Out Date</label>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                selectsEnd
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={checkInDate}
                maxDate={new Date(eventsData.check_out)}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="room-booking-section mt-5">
          {fields.map((field, index) => (
            <div key={field.id} className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <label>Room</label>
                    <select
                      className="form-control"
                      {...register(`rooms.${index}.roomId`)}
                      onChange={(e) => handleRoomChange(index, e)}
                    >
                      <option value="">Select Room</option>
                      {eventsData.meta_data?.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.type} 
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label>Capacity</label>
                    <select
                      className="form-control capacitySelection"
                      {...register(`rooms.${index}.capacity`)
                      }
                      onChange={(e) => handleRoomChange1(index, e)}
                    >
                      <option value="">Select Capacity</option>
                      {(selectedRooms[index]?.capacity || []).map((cap) => (

                        <option key={cap.id} value={`${cap.capacity.no_of_adults}-${cap.capacity.no_of_childs}`} data-price={cap.price} data-id={cap.capacity_id}>
                          {cap.capacity.no_of_adults} adults {cap.capacity.no_of_childs > 0 && `and ${cap.capacity.no_of_childs} children` } - ${cap.price}/night
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <button
                      type="button"
                      className="btn btn-danger add-btn"
                      onClick={() => remove(index)}
                    >
                      Remove Room
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary add-btn"
              onClick={() => {
                setRoomOBj(prev=>[...prev,obj]);
                setObj({});
                append({ roomId: "", capacity: "" })
              }}
            >
              Add Another Room
            </button>
          </div>
        </div>



        <div className="total-price mt-3">
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </div>

        <div className="flex mt-5 justify-content-center">
          <button
            className="btn btn-primary add-btn"
            onClick={onProceedCheckoutHandler}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleEvent;

