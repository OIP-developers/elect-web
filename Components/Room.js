import Image from "next/image";
import React from "react";
import shashkay from '../assets/shashka.png'
import suiteImg from '../assets/7.png'
import familyImg from '../assets/8.png'
import classicImg from '../assets/9.png'
import coupleImg from '../assets/10.png'
import diamondImg from '../assets/11.png'
import royalImg from '../assets/12.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



const Room = () =>{
const Room = [
    {
        image:suiteImg,
        title:"Suite Room",
        btnText:"Room Detail"

    },
    {
        image:familyImg,
        title:"Family Room",
        btnText:"Room Detail"

    },
    {
        image:classicImg,
        title:"classNameic Room",
        btnText:"Room Detail"

    },
    {
        image:coupleImg,
        title:"Couple Room",
        btnText:"Room Detail"

    },
    {
        image:diamondImg,
        title:"Diamond Room",
        btnText:"Room Detail"

    },
    {
        image:royalImg,
        title:"Royal Room",
        btnText:"Room Detail"

    },

]


    return(
<section className="our-room">
        <div className="container-80">
            <div className="headings-wrap text-center">
                <h2 className="color-green">Discover Our Room</h2>
               <Image className="shasky" src={shashkay} width="390px" height="34px"/>
                <p className="fa-24">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s</p>
            </div>
            <div className="room-wrapper">
                <div className="row">
                   {
                    Room.map((Rooms)=>{
                        return(
                            <div className="col-lg-4">
                            <div className="room-wrap">
                                <img src="assets/7.png" alt=""/>
                                <Image src={Rooms.image} width='480px' height='423px' />
                                <h2 className="color-green">{Rooms.title}</h2>
                                {/* <button className="main-btn">{Rooms.btnText}<FontAwesomeIcon icon={faArrowRight} className="icon" /></button> */}
                            </div>
                        </div>
                        )

                    })
                   }
                  
                </div>
            </div>
        </div>
      </section>
    );
}

export default Room;