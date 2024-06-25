import React from "react";


const Newsletter = ()=>{
    return(
<section className="newsletter">
        <div className="container-80">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="newsletter-content">
                        <h2>Join To Get Our Newsletter</h2>
                        <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="newsletter-form" action="">
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                        <button className="main-btn" type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
}
export default Newsletter;