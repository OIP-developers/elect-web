import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import shashka from '../assets/shashka.png';

const Contact = ()=>{
    return(
        <section className="contact-sec">
        <div className="container-80">
            <div className="row">
                <div className="col-lg-7"></div>
                <div className="col-lg-5">
                    <div className="contact-content">
                        <div className="headings-wrap text-center">
                            <h2 className="color-green fa-60">Contact Us</h2>
                            {/* <img className="shashky" src="assets/shashka.png" alt="" /> */}
                            <Image className="shashky" src={shashka} alt=""/>
                            <p>We can personalize your trip to meet your needs.</p>
                        </div>
                        <form action="" className="contact-form">
                            <div className="names">
                                <div className="form-group">
                                    <input type="text" placeholder="Name" id="name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Venue Date" id="name" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Email" id="name" className="form-control" />
                            </div>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                            <button className="main-btn">Send An Inquiry<FontAwesomeIcon icon={faArrowRight} className="icon" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
}
export default Contact;