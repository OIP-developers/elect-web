import React from "react";
import Header from "../../Components/Header";

import Footer from "../../Components/Footer";
import Bannerinner from "../../Components/Aboutus/Bannerinner";
import Contact from "../../Components/Contact";

const ContactUs = () =>{
    return(
<>
<Header/>
<Bannerinner title="Contact Us"/>
<Contact/>
<Footer/>
</>
    );
}
export default ContactUs;