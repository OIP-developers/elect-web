import React from "react";
import shashka from '../assets/shashka.png';
import personImg from '../assets/14.png';
import Image from "next/image";
import Slider from "react-slick";

const Testimonial = () =>{
    const slides = {
        dots: false,
        infinite: true,
        speed: 500,
        
        slidesToShow: 2,
        slidesToScroll: 1
      };

      const slider = [
        {
            description:"Stephanie is the perfect travel agent. She worked with our large group of 12 couples from the beginning to the end. She was amazing and the consummate professional. Not to mention the trip was absolutely wonderful. Everyone had a great time and all of our needs were met. Highly recommend!!",
            title:"-Georgina P.",
            image:personImg
        },
        {
            description:"Stephanie is the perfect travel agent. She worked with our large group of 12 couples from the beginning to the end. She was amazing and the consummate professional. Not to mention the trip was absolutely wonderful. Everyone had a great time and all of our needs were met. Highly recommend!!",
            title:"-Talisa T.",
            image:personImg
        },
        {
            description:"Stephanie is the perfect travel agent. She worked with our large group of 12 couples from the beginning to the end. She was amazing and the consummate professional. Not to mention the trip was absolutely wonderful. Everyone had a great time and all of our needs were met. Highly recommend!!",
            title:"-Georgina P.",
            image:personImg
        },
        {
            description:"Stephanie is the perfect travel agent. She worked with our large group of 12 couples from the beginning to the end. She was amazing and the consummate professional. Not to mention the trip was absolutely wonderful. Everyone had a great time and all of our needs were met. Highly recommend!!",
            title:"-Talisa T.",
            image:personImg
        },
        {
            description:"Stephanie is the perfect travel agent. She worked with our large group of 12 couples from the beginning to the end. She was amazing and the consummate professional. Not to mention the trip was absolutely wonderful. Everyone had a great time and all of our needs were met. Highly recommend!!",
            title:"-Georgina P.",
            image:personImg
        }
      ]
    return(
<section className="testimonial">
        <div className="container-80">
            <div className="testi-main-wrapper">
                <div className="headings-wrap headings-wrap-sm text-center">
                    <h2 className="color-green">Client Testimonials</h2>
                    <img className="shashky" src="assets/shashka.png" alt=""/>
                    <Image className="shashky" src={shashka} width='320px' height='28px'/>
                    <p>We take great pride in the many happy clients we have served over the years.
                        Read what our clients are saying about their experiences.</p>
                </div>
                <div className="testi-slider-wrapper">
                <Slider {...slides}  className="testi-slider">
                    
                        
                      {
                        slider.map((item)=>{
                            return(
                                <div className="testi-slide">
                                <p>{item.description}</p>
                                <div className="customer-profile">
                                    <h2>{item.title}</h2>
                                    <Image src={item.image}/>
                                </div>
                            </div>
                            );
                        })
                      }
                    
                        </Slider>
                </div>
            </div>
        </div>
      </section>
    );
}
export default Testimonial;