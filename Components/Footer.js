import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import gallery1 from "../assets/17.png";
import gallery2 from "../assets/18.png";
import gallery3 from "../assets/19.png";
import gallery4 from "../assets/20.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMarker,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  // const gallery = [
  //   {
  //     image: gallery1,
  //   },
  //   {
  //     image: gallery2,
  //   },
  //   {
  //     image: gallery3,
  //   },
  //   {
  //     image: gallery4,
  //   },
  // ];
  return (
    <footer className="main-footer">
      <div className="container-80">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-content">
              <img src="assets/logo.png" alt="" />
              <Image src={logo} width="191px" height="83px" />
              <p>
                Lorem Ipsum is simply dummy text of the and typesetting
                industry. Lorem Ipsum the lorem ispum.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-links">
              <h2 className="color-green footer-head">Quick link</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
                <li>
                <a href="/privacy-policy">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-3">
            <div className="footer-links">
              <h2 className="color-green footer-head">Service</h2>
              <ul>
              
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
                <li>
                  <a href="https://kt-travels-dashboard-upja.vercel.app/login" target="_blank">Log In</a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-4">
            <div className="footer-address">
              <h2 className="color-green footer-head">Contact Us</h2>
              <ul>
                <li><span>
                  <FontAwesomeIcon icon={faMarker} className="icon" /></span> 3433,
                  7187 Washington St SW # H, Covington, GA 30014, USA
                </li>
                <li>
                    <span>
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  </span>
                  <a href="mailto:info@elect.com">
                    info@elect.com
                  </a>
                </li>
                <li><span>
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                  </span>
                  <a href="tel:000-000-0000">000-000-0000</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="footer-images ">
          {gallery.map((item) => {
            return (
              <div className="footer-bottom-img">
                <Image src={item.image} width="160px" height="145px" />
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="footer-policy-wrap">
        {/* <p>
          <a href="#">Privacy policy & Cookies policy</a>
        </p>
        <p>
          <a href="#">Terms and conditions</a>
        </p> */}
        <p>
          <a href="#">© 2024 Elect. All rights reserved.</a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
