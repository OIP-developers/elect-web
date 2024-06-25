import React from "react";

import Header from "../../Components/Header";

import Bannerinner from "../../Components/Aboutus/Bannerinner";
import Bloginner from "../../Components/Blog/Bloginner";
import Footer from "../../Components/Footer";

const blog = () =>{
    return(
<>
<Header/>
<Bannerinner title="Blogs"/>
<Bloginner/>
<Footer/>
</>
    );
}

export default blog;