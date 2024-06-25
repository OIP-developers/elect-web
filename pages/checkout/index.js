import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from 'axios';
import Bannerinner from "../../Components/Aboutus/Bannerinner";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Checkout = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const router = useRouter();
  const [isTravelProtectionChecked, setIsTravelProtectionChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const terms_and_condition = localStorage?.getItem("terms and condition");

  const onSubmit = async data => {
    const price = localStorage?.getItem("price");
    const eventId = localStorage?.getItem("eventId");
    const selectedRooms = JSON.parse(localStorage?.getItem("Selected Rooms"));

    delete data.confirmPassword;

    const submissionData = {
      ...data,
      price,
      eventId,
      selectedRooms,
      travelProtection: isTravelProtectionChecked
    };

    try {
      const response = await axios.post('https://custom.webprojectmockup.com/Kt_travels_backend/public/api/create_client_checkout', submissionData);

      toast.success('Booking completed successfully!');
      reset();  // Clear the form on successful submission

    } catch (error) {
      toast.error('Error completing the booking. Please try again.');
    }
  };

  const handleTravelProtectionChange = (event) => {
    setIsTravelProtectionChecked(event.target.checked);
  };

  const password = watch("password");

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  return (
    <>
      <Header />
      <Bannerinner title="Checkout" />
      <div className="container">
        <div className="row checkout-roe">
          <div className="col-12 col-md-6">
            <div className="text-section">
              <h2>Complete Your Booking</h2>
              <p>Please fill out the form to complete your booking process. Ensure all details are correct and valid.</p>
              <p>We offer travel protection for your convenience. If you want to include travel protection, check the appropriate box in the form.</p>
              <h2>Terms And Condition</h2>
              <p>{terms_and_condition}</p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-container checkout-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    {...register("firstName", { required: true })}
                    className="form-control"
                  />
                  {errors.firstName && <p className="error">First name is required</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    {...register("lastName", { required: true })}
                    className="form-control"
                  />
                  {errors.lastName && <p className="error">Last name is required</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { required: true })}
                    className="form-control"
                  />
                  {errors.email && <p className="error">Email is required</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-group">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password", { required: true })}
                      className="form-control"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  {errors.password && <p className="error">Password is required</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-group">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirmPassword", {
                        required: true,
                        validate: value =>
                          value === password || "The passwords do not match"
                      })}
                      className="form-control"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={toggleShowConfirmPassword}
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="paymentType">Payment Type</label>
                  <select id="paymentType" {...register("paymentType", { required: true })} className="form-control">
                    <option value="one-time">One Time Payment</option>
                    <option value="installment">Installment Payment</option>
                  </select>
                  {errors.paymentType && <p className="error">Payment type is required</p>}
                </div>

                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    id="travelProtection"
                    checked={isTravelProtectionChecked}
                    onChange={handleTravelProtectionChange}
                    className="form-check-input"
                  />
                  <label htmlFor="travelProtection" className="form-check-label">If you want travel protection kindly check</label>
                </div>

                {isTravelProtectionChecked && (
                  <>
                  <p className="info">Click on the below link for travel protection</p>
                  </>
                )}

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Checkout;