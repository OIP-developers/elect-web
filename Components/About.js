import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import aboutImg from '../assets/about.jpg'
import Image from "next/image";
import { useRouter } from "next/router";
const About = () => {
    const {push} = useRouter()
    return (
        <section className="about-sec">
            <div className="container-80 no-gutters">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="assets/about.png" alt="" />
                            <Image src={aboutImg} width='600px' height='100%' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <h2 className="color-green">We’re gonna make this place your home</h2>
                            <p className="fa-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,                        </p>
                            <button className="main-btn" onClick={()=>push("/about")}>View More<FontAwesomeIcon icon={faArrowRight} className="icon" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default About;