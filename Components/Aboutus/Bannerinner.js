import React from "react";



const Bannerinner = (props)=>{
return(
    <section className="banner-section inner-banner">
    <div className="container-80">
        <div className="row">
            <div className="col-lg-6">
                <div className="banner-content">
                    <h1 className="color-green">{props.title}</h1>
                    
                </div>
            </div>
        </div>
    </div>
 </section>
);
}

export default Bannerinner;